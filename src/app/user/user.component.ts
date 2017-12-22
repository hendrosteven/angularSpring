import {Component, OnInit, NgZone} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../service/user.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({selector: 'app-user', templateUrl: './user.component.html', styleUrls: ['./user.component.css']})
export class UserComponent {

  user : User = new User();
  email : string = '';
  password : string = '';
  saved : boolean = false;
  hasLogin: boolean = false;

  constructor(private userService : UserService) {}

  onRegister() {
    this.user.roles = 'ADMIN';
    this.user.password = Md5.hashStr(this.user.password).toString();
    this
      .userService
      .register(this.user)
      .subscribe(output => {
        console.log(output);
        this.user = new User();
        this.saved = true;
      }, error => {
        console.log(error);
      })
  }

  onLogin() {
    let hash = Md5.hashStr(this.password).toString();
    let data = {
      'email': this.email,
      'password': hash
    }
    this.userService.login(data).subscribe(output=>{
      if(output.payload){
        let token = btoa(this.email + ':' + hash);  
        localStorage.setItem('token', token);
        this.hasLogin = true;
        console.log(token);
      }else{
        alert('Login fail');
      }
    },error=>{
      console.log(error);
    });
  }

  onLogout(){
    localStorage.clear();
    this.hasLogin = false;
  }

}
