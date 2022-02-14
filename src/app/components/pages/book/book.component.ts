import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book : any;
  searchForm!: FormGroup;
  constructor(private service : BookService, private router : Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchName: new FormControl()
    });

    this.service.getBook().subscribe((res:any)=>{
      this.book = res.data;
    })
  }

  searchName(){
    this.service.getBookByName(this.searchForm.value.searchName).subscribe((res:any)=>{
      this.book = res.data;
    })
  }

  deleteBook(id:any){
    if(confirm("Comfirm Delete")){
      this.service.deleteBook(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate(['/book']);
        });
      });
    }
  }
}
