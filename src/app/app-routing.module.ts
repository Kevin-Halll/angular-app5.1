import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { BankingInfoComponent } from './components/banking-info/banking-info.component';

const routes: Routes = [
  {path: '', component: StudentsListComponent},
  {path: 'details/:_id', component: StudentsDetailComponent},
  {path: 'add-student', component: StudentAddComponent},
  {path: 'updates/:_id', component: StudentUpdateComponent},
  {path: 'accounts', component: AccountListComponent},
  {path: 'add-banking-info/:_id', component: AccountAddComponent},
  {path: 'banking-info/:_id', component: BankingInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
