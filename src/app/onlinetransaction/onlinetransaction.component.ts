import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';
import { BehaviorSubject, Observable } from 'rxjs';
import {AccountService} from '../_services/account.services';
import { AuthenticationService } from '../_services/authentication.service';
let item:any;
@Component({
  selector: 'app-onlinetransaction',
  templateUrl: './onlinetransaction.component.html',
  styleUrls: ['./onlinetransaction.component.css']
})
export class OnlineTransactionComponent implements OnInit {
  listitems : any;
  filter=false;
  isvaliddate=false;
  filteredtrans:string[]=[];
  getdate = new Date();
  fromday :string;
  today:string;
  public currentUser: Observable<any>;
  constructor(private loginService:LoginService,
    private accountService:AccountService,
    private authen:AuthenticationService) { 
      var day = this.getdate.getUTCDate();
      var month =this.getdate.getUTCMonth();
      var year = this.getdate.getUTCFullYear();
      this.fromday = day + "/" + month + "/" + year;
      
      this.today = day + "/" + (month+1) + "/" + year;
    }
  
  getData(){
    this.accountService.getTransData().then(
      function(result){
        result.subscribe(
          data=>{
            item = data;
            console.log("transfer info",item);           
          },
          error=>{
            console.log("transfer error",error);
          }
        )
      }
    );
  }
  ngOnInit() {
    this.getData();
    this.listitems = this.accountService.GetTrans();
  }
  ngDoCheck(){
    this.listitems = this.accountService.GetTrans();
    console.log("thislist",this.listitems)
  }
  isValidDate(dateString)
  {
      // First check for the pattern
      if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
          return false;

      // Parse the date parts to integers
      var parts = dateString.split("/");
      var day = parseInt(parts[1], 10);
      var month = parseInt(parts[0], 10);
      var year = parseInt(parts[2], 10);

      // Check the ranges of month and year
      if(year < 1000 || year > 3000 || month == 0 || month > 12)
          return false;

      var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

      // Adjust for leap years
      if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
          monthLength[1] = 29;

      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1];
  };
  filtertrans(){
    this.filter=true;
    this.filteredtrans=[];
    var fromday = parseInt(this.fromday.split("/")[0]);
    var frommonth = parseInt(this.fromday.split("/")[1]);
    var fromyear = parseInt(this.fromday.split("/")[2]);
    var today = parseInt(this.today.split("/")[0]);
    var tomonth = parseInt(this.today.split("/")[1]);
    var toyear = parseInt(this.today.split("/")[2]);

    
    this.listitems.forEach(element => {
      console.log("list",element['date'])
      let date = element['date'];
      var year = parseInt(String(date).substring(0,4));
      var month = parseInt(String(date).substring(5,7));
      var day   = parseInt(String(date).substring(8,10));

      var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
      
      if(!pattern.test(this.fromday)||!pattern.test(this.today)){
        this.isvaliddate=true;
        return;
      }
      if(year>toyear||year<fromyear)
      {
        this.isvaliddate = true;
        console.log("invalid year")
      }else{
        if(month>tomonth||month<frommonth)
        {
          this.isvaliddate = true;
          console.log("invalid month")
        }
        else{
          if((day>today||day<fromday)&&(month==tomonth&&month==frommonth))
          {
            this.isvaliddate = true;
            console.log("invalid day")
          }
          else{
            this.filteredtrans.push(element);
            this.isvaliddate=false;
            
          }
        }
      }
      
    });
   
  }
}
