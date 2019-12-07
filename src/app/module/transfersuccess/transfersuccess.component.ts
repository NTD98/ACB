import { Component, OnInit } from '@angular/core';
import { AccountService} from '../../_services/account.services';
let accreceive:object;
@Component({
  selector: 'app-transfersuccess',
  templateUrl: './transfersuccess.component.html',
  styleUrls: ['./transfersuccess.component.css']
})
export class TransfersuccessComponent implements OnInit {

  constructor(private accountService:AccountService) { }
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
    this.accountService.updateBalance(term);
    this.accountService.updateBalance(receive);
  }
}
