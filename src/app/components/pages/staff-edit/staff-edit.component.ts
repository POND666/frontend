import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  staff: any;
  editForm!: FormGroup;
  constructor(private service: StaffService,private router: Router, private activetedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      Name: new FormControl(),
      phoneNumber: new FormControl(),
      Address: new FormControl(),
    });
    
    this.service.getStaff().subscribe((res: any)=>{
      this.staff = res.data;
    })
  }

  editStaff(){

  }
}
