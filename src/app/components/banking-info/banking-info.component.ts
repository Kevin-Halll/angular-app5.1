import { Router, ActivatedRoute } from '@angular/router';
import { AccountsService } from './../../services/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking-info',
  templateUrl: './banking-info.component.html',
  styleUrls: ['./banking-info.component.css']
})
export class BankingInfoComponent implements OnInit {
  accountInfo: any;
  id: string = this.route.snapshot.params['_id']

  constructor(private accountService:AccountsService, private urlRoute:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.accountService.bankingInfo().subscribe( data => {
      console.log(data);
      
      data.filter((result) => {
        if(result.studentId._id == this.route.snapshot.params['_id']) {
          this.accountInfo = result
        } 
      })
      console.log(this.accountInfo);
    })
  }

}
