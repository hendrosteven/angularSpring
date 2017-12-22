import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category';
import { Http } from '@angular/http';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: Category[] = [];
  category: Category = new Category();

  constructor(private categoryService: CategoryService) { 
    this.categoryService.findAll().subscribe(data=>{
      //implements berhasil
      if(data.status===1){
        this.categories = data.payload;
      }else{
        console.log(data.messages[0]);
      }
    }, error=>{
      //implement gagal
      console.log(error);
    },()=>{
      //completed
    });
  }

  


}
