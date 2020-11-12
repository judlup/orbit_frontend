import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgPipesModule} from 'ngx-pipes';

import { StudentsComponent } from './students/students/students.component';
import { AddStundentComponent } from './students/add-stundent/add-stundent.component';
import { EditStundentComponent } from './students/edit-stundent/edit-stundent.component';
import { StudentComponent } from './students/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    AddStundentComponent,
    EditStundentComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
