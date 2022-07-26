import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { PlayGroundComponent } from './components/play-ground/play-ground.component';
import { HighlightDirective } from './highlight.directive';
import { Highlight2Directive } from './directives/highlight2.directive';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { BankingInfoComponent } from './components/banking-info/banking-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentsDetailComponent,
    PlayGroundComponent,
    HighlightDirective,
    Highlight2Directive,
    StudentAddComponent,
    StudentUpdateComponent,
    AccountListComponent,
    AccountAddComponent,
    BankingInfoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
