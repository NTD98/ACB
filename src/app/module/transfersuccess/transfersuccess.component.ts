import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import { AccountService} from '../../_services/account.services';
let accreceive:object;
@Component({
  selector: 'app-transfersuccess',
  templateUrl: './transfersuccess.component.html',
  styleUrls: ['./transfersuccess.component.css']
})
export class TransfersuccessComponent implements OnInit {

  constructor(private accountService:AccountService,private loginService:LoginService) { }
  setData(any:any){
    accreceive = any;
    
  }
  ngOnInit() {
    console.log(this.accountService.acc)
    this.accountService.getAccRe(this.accountService.acc).then(
      function(result){
        console.log("result",result)
      }
    )
    this.accountService.getAccName(this.accountService.acc).then(
      function(result){
        console.log("accnameresult",result);
      }
    )
  }
  transfer(){
    var term = this.accountService.getData();
    term['availableBalance']  = +term['availableBalance'] - +this.accountService.moneytransfer;
    term['realBalance']  = +term['realBalance'] - +this.accountService.moneytransfer;
    var receive = this.accountService.getAccReData();
    receive['availableBalance']  = +receive['availableBalance'] + +this.accountService.moneytransfer;
    receive['realBalance']  = +receive['realBalance'] + +this.accountService.moneytransfer;
    this.accountService.updateBalance(term,1);
    this.accountService.updateBalance(receive,2);
    this.accountService.createTransaction(term['accountNumber'],receive['accountNumber'],this.accountService.transfertext,this.accountService.moneytransfer).then(
      function(data){
        data.subscribe(
          result=>{
            console.log("trans success",data);
          },
          error=>{
            console.log("error trans",error);
          }
        )
      }
    );
  }
}
