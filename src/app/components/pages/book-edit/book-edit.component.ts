import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: any;
  editForm!: FormGroup;
  currentBook: any;

  constructor(private service: BookService,private router: Router,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name: new FormControl(),
      author: new FormControl(),
      publicher: new FormControl(),
      price: new FormControl()
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.service.getBookById(this.id).subscribe((res)=>{
      this.currentBook = res.data;
      this.editForm.controls['name'].setValue(this.currentBook.name);
      this.editForm.controls['author'].setValue(this.currentBook.author);
      this.editForm.controls['publicher'].setValue(this.currentBook.publicher);
      this.editForm.controls['price'].setValue(this.currentBook.price);
    });

  }

  editBook(){
    let book = {
      name: this.editForm.value.name,
      author: this.editForm.value.author,
      publicher: this.editForm.value.publicher,
      price: this.editForm.value.price
    }
    this.service.editBook(book,this.id).subscribe((res:any)=>{
      window.alert("Update Complete");
      this.router.navigate(["/book"]);
    });
  }
}
