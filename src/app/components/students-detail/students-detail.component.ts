import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Students } from 'src/app/services/interfaces';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit {
  id!: string;
  studentDetail: any;
  student?: Students;
  selectedStudent!: StudentService;

  constructor(private studentService: StudentService, private route: ActivatedRoute, private urlRoute : Router) { 
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['_id'];
    this.studentService.studentDetails(this.route.snapshot.params['_id']).subscribe((data: Students) => {
      this.student = data;
      console.log(this.student);      
    })
  }

  removeStudent(Id: string): void {
    this.studentService.deleteStudent(Id).subscribe({
      next:(res) => {
        alert("student has been deleted")
        this.urlRoute.navigate(['/'])
      },
      error:(err) => {
        alert('error deleting student ' + err)
        console.log(err);
        
      }
    });
 }

}
