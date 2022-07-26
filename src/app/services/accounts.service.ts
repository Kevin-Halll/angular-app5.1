import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private apiUrl:string = 'http://localhost:3000/api2';
  private HTTP_HEADER = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  
  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student-banking-info`)
  }

  addAccount(account:Account):Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}/create`, account, this.HTTP_HEADER);
  }
  bankingInfo():Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student-banking-info`)
  }
}
