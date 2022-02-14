import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BorrowService } from 'src/app/service/borrow.service';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {
  borrow: any;
  searchForm!: FormGroup;
  constructor(private service : BorrowService,private router : Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchId: new FormControl()
    });

    this.service.getBorrow().subscribe((res:any)=>{
      this.borrow = res.data;
    })
  }

  searchId(){
    
  }
}
