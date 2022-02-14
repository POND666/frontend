import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff: any;
  searchForm!: FormGroup;
  constructor(private service: StaffService,private router: Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchId: new FormControl()
    });

    this.service.getStaff().subscribe((res: any)=>{
      this.staff = res.data;
    })
  }

  searchId(){
    this.service.getStaffById(this.searchForm.value.searchId).subscribe((res:any)=>{
      this.staff = res.data;
    })
  }

  deleteStaff(id:any){
    
  }
}
