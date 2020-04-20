import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
import {Router} from '@angular/router';
import {AccountService} from '../../_services/account.services';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-changeusername',
  templateUrl: './changeusername.component.html',
  styleUrls: ['./changeusername.component.css']
})
export class ChangeusernameComponent implements OnInit {
  newName="";
  confirmName="";
  newPass=null;
  confirmPass=null;
  oldPass="";
  namemismatch=false;
  passmismatch=false;
  oldpassmismatch=false;
  nameexist=false;
  constructor(private loginService:LoginService,
    private accountService:AccountService,
    private authen:AuthenticationService,
    private router : Router) { 
      console.log(this.authen.currentUserValue.password)
    }

  ngOnInit() {
  }
  ChangeUser()
  {
    if(this.confirmName!=this.newName||this.newName=="")
    {
      this.namemismatch = true;
      console.log("name");
      return;
    }
    else
      this.namemismatch = false;

    if(this.newPass!=this.confirmPass||this.newPass==null||this.confirmPass==null)
    {
      this.passmismatch = true;
      console.log(this.confirmPass);
      return;
    }
    else
      this.passmismatch = false;
      
    if(this.oldPass != this.authen.currentUserValue.password)
    {
      this.oldpassmismatch = true;
      console.log("old pass");
      return;
    }
    else
      this.oldpassmismatch = false;
    this.accountService.changeUsername(this.newName,this.newPass).pipe().subscribe(
      data => {
        console.log(data)
        this.router.navigate(['./../changepasssucc']);
    },
    error => {
        this.nameexist=true;
        console.log(error)
    });
  }
}
