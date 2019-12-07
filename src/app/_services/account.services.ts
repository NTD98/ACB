import { Injectable, Output,EventEmitter } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';
let account:object;
let accre:object;
let loginreceiacc:object;
@Injectable({ providedIn: 'root' })
export class AccountService {
    acc:number;
    moneytransfer=0;
    transfertext="";
    accreceive=0;
    @Output() changeAcc: EventEmitter<number> = new EventEmitter();
    @Output() changeMoney: EventEmitter<number> = new EventEmitter();
    @Output() changeText: EventEmitter<string> = new EventEmitter();
    constructor(private http: HttpClient,private authen: AuthenticationService) {
        console.log("accountid",authen.currentUserValue.id);
        this.getAccount(authen.currentUserValue.id).then(
            function(result){
                result.subscribe(
                    function(data){
                        account = data;
                        console.log("dataser",account);
                    }
                )
            }
        )
    }

    async getAccount(id:number){
        let data = await this.http.get<any>('http://localhost:5000/api/BankAccount/'+id);
        console.log("data",data);
        return data;
    }
    async getAccName(accnum:number){
        let data = await this.http.get<any>('http://localhost:5000/api/Account/'+accnum).subscribe(
            data=>{
                loginreceiacc = data;
                console.log("loginreice",loginreceiacc);
            }
        );
        console.log("name",data);
        return data;
    }
    async getAccRe(accnum:number){
        let data = await this.http.get<any>('http://localhost:5000/api/BankAccount/'+accnum).subscribe(
            data=>{
                accre = data;
                console.log("getaccre",accre);
            }
        );
        console.log("accredata",data);
        return data;
    }
    updateBalance(ba:object){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'});
        let options = { headers: headers };
        var id = this.getData()['id'];
        this.http.put('http://localhost:5000/api/BankAccount/' + ba['id'],ba,options).subscribe(
            data=>{
                console.log("success",ba['accountNumber']);
            },
            error=>{
                console.log("error",error);
            }
        )
    }
    SetAccount(term:number){
        this.acc = term;
        this.changeAcc.emit(this.acc);
    }
    SetMoney(term:number){
        this.moneytransfer = term;
        this.changeMoney.emit(this.moneytransfer);
    }
    SetText(term:string){
        this.transfertext = term;
        this.changeText.emit(this.transfertext);
    }
    getData(){
        console.log("return",account)
        return account;
    }
    getAccReData(){
        console.log("returnAccre",accre);
        return accre;
    }
    getAccReName(){
        console.log("accrename",loginreceiacc);
        return loginreceiacc['name'];
    }
}