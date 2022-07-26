import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  createStudent = new FormGroup({
    "name" : new FormControl(''),
    "email" : new FormControl(''),
    "cohort" : new FormControl(''),
    "phoneNumber" : new FormControl(''),
  })

  get G_phoneNum() {return this.createStudent.get('phoneNumber')}
  constructor(private studentService:StudentService, private urlRouter: Router) { }

  addStudent(): void {
    this.studentService.createStudent(this.createStudent.value).subscribe({
      next:(res) => {
        alert("student has been created")
        this.urlRouter.navigate(['/'])
      },
      error:() => {
        alert('error creating student')
      }
    })
    console.log(this.createStudent);
    // console.log(this.G_phoneNum?.value.replace(/[^0-9-]/g, ''));
    console.log(this.G_phoneNum?.value);
  }

  ngOnInit(): void {
  }

}
