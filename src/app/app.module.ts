import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './service/category.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
