import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  member: any;
  searchForm!: FormGroup;
  constructor(private service : MemberService, private router : Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchId: new FormControl()
    });

    this.service.getMember().subscribe((res:any)=>{
      this.member = res.data;
    })
  }

  searchId(){
    this.service.getMemberById(this.searchForm.value.searchId).subscribe((res:any)=>{
      this.member = res.data;
    })
  }

  deleteMember(id: any){

  }
}
