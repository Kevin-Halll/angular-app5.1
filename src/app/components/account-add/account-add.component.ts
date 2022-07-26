import { Router, ActivatedRoute } from '@angular/router';
import { AccountsService } from './../../services/accounts.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Students } from 'src/app/services/interfaces';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit { 
  constructor(
    private accountService:AccountsService,
    private studentService:StudentService,
    private urlRouter:Router,
    private route:ActivatedRoute
  ) { }

  student!: Students;

  createAccount = new FormGroup({
    studentId : new FormControl(''),  
    account_num : new FormControl(''),
    bank : new FormControl(''),
    branch : new FormControl(''),
    account_type : new FormControl(''),
    statuss : new FormControl(''),
  })

  get G_studentId() {return this.createAccount.get('studentId')}

  addAccount(){
    this.accountService.addAccount(this.createAccount.value).subscribe({
      next:(res) => {
        alert("Account has been created")
        this.urlRouter.navigate(['/accounts'])
      },
      error:() => {
        alert('error creating Account')
      }
    })
  }
  ngOnInit(): void {
    this.studentService.studentDetails(this.route.snapshot.params['_id']).subscribe((data: Students) => {
      this.student = data;
      this.G_studentId?.setValue(data._id);
    })
    console.log(this.student);      
  }

}
