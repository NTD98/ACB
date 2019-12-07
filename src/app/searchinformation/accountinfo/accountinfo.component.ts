import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
import {AccountService} from '../../_services/account.services';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../_services/authentication.service';
let account:object;
let isload:boolean;
@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css']
})

export class AccountinfoComponent implements OnInit {
  currentUser:any;
  test:object;
  string="a";
  constructor(private loginService:LoginService,private accountservice:AccountService,
              private authenticationService: AuthenticationService) { 
      this.currentUser = this.authenticationService.currentUserValue;
     
  }
  log(){    
    this.string="b";
    console.log(account);
  }
  ngOnInit() {
    
    isload=false;
  }
  ngDoCheck(){
    
  }
}
