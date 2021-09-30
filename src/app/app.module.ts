import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    HomeComponent
  ],
  imports: [
    NgxPaginationModule,
    ReactiveFormsModule,
    TableModule,
    ToolbarModule,
    ToastModule,
    FormsModule,
    InputNumberModule,
    HttpClientModule,
    BrowserModule,
    ChartModule,
    CardModule,
    ButtonModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'first', component: FirstComponent},
      {path: 'second', component: SecondComponent},
      {path: 'third', component: ThirdComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
