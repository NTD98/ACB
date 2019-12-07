import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
import { AccountService} from '../../_services/account.services';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
let moneytransfer=0;
let transfertext="";
let accreceive=0;
@Component({
  selector: 'app-transferinacb',
  templateUrl: './transferinacb.component.html',
  styleUrls: ['./transferinacb.component.css']
})
export class TransferInACBComponent implements OnInit {
  moneyerror=false;
  accounterror=false;
  accountNumber=0;
  money = 0;
  text="abc";
  errortext = new Array<string>("");
  constructor(private loginService:LoginService, private accountService:AccountService,
    private router : Router) { }

  ngOnInit() {
  }
  dosomething(value) {
    this.text = value;
  }
  getReceiveAcc(num:number){
    this.accountService.getAccount(num).then(
      function(data){
        data.subscribe((result)=>{
          console.log("result",result);
          accreceive = result.accountNumber;     
        },
        (error)=>{
          console.log(error)
        }
        )
      }
    )
  }
  
  transfer(){
    console.log(this.errortext)
    if(this.money<=this.accountService.getData()['realBalance']&&this.money>=50000)
    {
      this.accountService.getAccRe(this.accountNumber)
      if(this.accountService.getAccReData()){
        this.accountService.SetMoney(this.money);
        this.accountService.SetAccount(this.accountNumber);
        this.accountService.SetText(this.text);
        this.router.navigate(['../../transfersuccess']);
        console.log(this.accountNumber,this.money,this.text);
;     }
      else{
        if(!this.accounterror){
          this.accounterror=true;
          this.errortext.push("Tài khoản nhận không tồn tại");
          return;
        }
        return;
      }
    }
    else
    {
      if(!this.moneyerror)
      {
        this.moneyerror=true;
        this.errortext.push("Số tiền chuyển phải lớn hơn 50.000 và nhỏ hơn số dư khả dụng");
        return;
      }
      return;
    }
  }
}
