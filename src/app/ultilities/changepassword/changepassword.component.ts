import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
import {Router} from '@angular/router';
import {AccountService} from '../../_services/account.services';
import {AuthenticationService} from '../../_services/authentication.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  newpass="";
  oldpass="";
  confirmpass="";
  ismatch=true;
  isoldpassmatch=true;
  constructor(private loginService:LoginService,
    private accountService:AccountService,
    private authen:AuthenticationService,
    private router : Router) { 
      console.log(this.authen.currentUserValue.password)
    }

  ngOnInit() {
    console.log(this.authen.currentUserValue.username)
  }
  changePass(){
    
    if(this.newpass!=this.confirmpass)
    {
      this.ismatch=false;
      return;
    }else{
      this.ismatch=true;
    }
    if(this.oldpass != this.authen.currentUserValue.password)
    {
      this.isoldpassmatch = false;
      return;
    }else{
      this.isoldpassmatch = true;
    }
    this.accountService.changePass(this.newpass).pipe().subscribe(
      data => {
        console.log(data)
        this.router.navigate(['./../changepasssucc']);
    },
    error => {
        console.log(error)
    });
   
  }
}
