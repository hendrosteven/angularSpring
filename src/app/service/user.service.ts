import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import {Http} from '@angular/http';
import {User} from '../classes/user';

@Injectable()
export class UserService {

  url : string = 'http://localhost:8080/api/user';

  constructor(private http : Http) {}

  register(user : User) {
    user.roles = 'ADMIN';
    return this
      .http
      .post(this.url, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this
      .http
      .post(this.url + '/login', user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    return Observable.throw(error.json() || 'Server error');
  }

}
