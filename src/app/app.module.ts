import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialsModule } from "./material.module";
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';
import { ProducDetailsRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialsModule,
    ProducDetailsRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
