import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from 'src/app/services/interfaces';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  ID : string | undefined = this.route.snapshot.params['id'];
  student?: Students;
  createStudent!: FormGroup

  // createStudent = new FormGroup({
  //   "name" : new FormControl(this.student?.name + "this name"),
  //   "email" : new FormControl(this.student?.email),
  //   "cohort" : new FormControl(this.student?.cohort),
  //   "phoneNumber" : new FormControl(this.student?.phoneNumber),
  // })

  // getters
  get G_name() {return this.createStudent.get('name')}
  get G_email() {return this.createStudent.get('email')}
  get G_cohort() {return this.createStudent.get('cohort')}
  get G_phoneNum() {return this.createStudent.get('phoneNumber')}

  constructor(private studentService:StudentService, private route: ActivatedRoute, private urlRouter: Router) { }

  updateStudent(): void {
    console.log(this.student?._id);
    this.studentService.updateStudent(this.student!._id, this.createStudent.value).subscribe({
      next:(res) => {
        alert("student has been updated")
        this.urlRouter.navigate([`details/${this.student?._id}`])
      },
      error:() => {
        alert('error updating student')
      }
    })
    console.log(this.createStudent);
    console.log(this.G_phoneNum?.value);
  }

  ngOnInit(): void {

    
    this.studentService.studentDetails(this.route.snapshot.params['_id']).subscribe((data: Students) => {
      this.student = data;
      this.createStudent = new FormGroup({
        "name" : new FormControl(data.name),
        "email" : new FormControl(data.email),
        "cohort" : new FormControl(data.cohort),
        "phoneNumber" : new FormControl(data.phoneNumber),
      })
      console.log(this.student);      
    })
  }

}
