import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  member: any;
  editForm!: FormGroup;
  constructor(private service: MemberService,private router: Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name: new FormControl(),
      studyGroup: new FormControl(),
      tel: new FormControl(),
      address: new FormControl(),
      categoryId: new FormControl()
    });
  }
  editMember(){
    
  }
}
