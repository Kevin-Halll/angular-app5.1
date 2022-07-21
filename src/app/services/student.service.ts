import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Students } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl:string = 'http://localhost:3000/api';
  private HTTP_HEADER = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.apiUrl)
  }

  studentDetails(_id:string): Observable<Students>{    
    return this.http.get<Students>(`${this.apiUrl}/find/${_id}`);
  }

  createStudent(student:Students):Observable<Students> {
    student.phoneNumber = student.phoneNumber.replace(/\D/g, '')
    console.log(student.phoneNumber);
    return this.http.post<Students>(`${this.apiUrl}/create`, student, this.HTTP_HEADER);
    
  }
  updateStudent(id: string, student:Students):Observable<Students> {
    console.log(student); 
    return this.http.patch<Students>(`${this.apiUrl}/update/${id}`, student, this.HTTP_HEADER);
    
  }
  deleteStudent(id: string):Observable<Students> {
    return this.http.delete<Students>(`${this.apiUrl}/remove/${id}`, this.HTTP_HEADER);
  }
  
}
