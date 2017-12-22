import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import {CategoryComponent} from '../category/category.component';
import {Category} from '../classes/category';

@Injectable()
export class CategoryService {

  url : string = 'http://localhost:8080/api/category';
  headers : any;
  options : any;

  constructor(private http : Http) {
  }

  findAll() {
    return this
      .http
      .get(this.url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  save(category) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + localStorage.getItem('token')
    });
    this.options = new RequestOptions({headers: this.headers});

    return this
      .http
      .post(this.url, category, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    return Observable.throw(error.json() || 'Server error');
  }

}
