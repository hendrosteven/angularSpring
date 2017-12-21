import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class CategoryService {

  url : string = 'http://localhost:8080/api/category';

  constructor(private http : Http) {}

  findAll() {
    return this
      .http
      .get(this.url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    return Observable.throw(error.json() || 'Server error');
  }

}
