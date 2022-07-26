import { AccountsService } from './../../services/accounts.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/services/interfaces';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: any[] = [];
  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe( data => {
      this.accounts = data
      console.log(data);
      
    })
  }

}
