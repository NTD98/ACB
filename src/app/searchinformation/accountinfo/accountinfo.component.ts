import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
import {AccountService} from '../../_services/account.services';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css']
})
export class AccountinfoComponent implements OnInit {
  account:object;
  isload=false;
  constructor(private loginService:LoginService,private accountservice:AccountService) { 
      this.accountservice.getAccount(1);
  }

  ngOnInit() {
   
  }
  ngDoCheck(){
    if(this.isload==false)
    {
      this.account = this.accountservice.getData();
      if(this.account!=undefined)
        {
          this.isload =true;
          console.log("final",this.account['id']);
        }    
    }
  }
}
