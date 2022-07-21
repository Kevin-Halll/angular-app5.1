import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/services/interfaces';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: Students[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe( data => {
      this.students = data
    })
  }

}
