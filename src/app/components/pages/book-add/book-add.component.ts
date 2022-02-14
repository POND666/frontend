import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private service: BookService,private router: Router) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      bookID: new FormControl(),
      name: new FormControl(),
      author: new FormControl(),
      publicher: new FormControl(),
      price: new FormControl()
    });
  }

  addBook(){
    let book = {
      bookID:this.bookForm.value.bookID,
      name: this.bookForm.value.name,
      author: this.bookForm.value.author,
      publicher: this.bookForm.value.publicher,
      price: this.bookForm.value.price
    }
    this.service.addBook(book).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a book complete."){
        window.alert("Add Complete");
        this.router.navigate(["/book"]);
      }else{
        window.alert("Add Not Complete !");
        this.router.navigate(["/book/addbook"]);
      }
      
    });
  }
}
