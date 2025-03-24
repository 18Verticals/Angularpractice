import { ElementRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {FormsModule } from '@angular/forms';
import { CostComponent } from './cost/cost.component';
import { SignalsComponent } from './signals/signals.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { StudentComponent } from './student/student.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutComponent,
    CostComponent,
    SignalsComponent,
    NgTemplateComponent,
    StudentComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
