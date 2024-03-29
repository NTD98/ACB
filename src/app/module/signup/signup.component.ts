import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from '../../_services/account.services';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  name ="n";
  email="e";
  password="p";
  confirmpass="c";
  mailerror=false;
  notmatch=true;
  mailtexterror="";
  isexistname=false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor(private accountService:AccountService,
    private router : Router) { }

  ngOnInit() {
  }
  ValidateEmail(mail:string) 
  {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      this.mailerror=false;
      return (true)
    }
      this.mailtexterror="mail không hợp lệ";
      this.mailerror=true;
      
      return (false)
  }
  signup(){
    if(this.password!=this.confirmpass)
    {
      console.log("notmatch",this.password,this.confirmpass)
      this.notmatch= false;
      this.change.emit(this.notmatch);
      return;
    }
    else{
      this.notmatch= true;
    }
    if(!this.ValidateEmail(this.email)){
      return;
    }
    this.accountService.signUp(this.name,this.password,this.email).subscribe(
      data=>{
        console.log("success", data);
        this.router.navigate(['../']);
      },
      error=>{
        if(error=='This email has been already taken')
        {
          this.mailtexterror="email này đã được sử dụng";
          console.log("error sigup",error);
          this.mailerror=true;
          this.isexistname=false;
        }
        else
        {
          console.log("error sig",error);
          this.isexistname=true
        };
      }
    );
    
  }
  dosomething(){

  }
}
