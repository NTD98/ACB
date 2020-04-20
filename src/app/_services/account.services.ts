import { Injectable, Output,EventEmitter } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';
let acctrans:number;
let account:object;
let accre:object;
let loginreceiacc:object;
@Injectable({ providedIn: 'root' })
export class AccountService {
    listtrans:any;
    acc:number;
    moneytransfer=0;
    transfertext="";
    accreceive=0;
    //@Output() InitAccNum: EventEmitter<number> = new EventEmitter();
    @Output() changeAcc: EventEmitter<number> = new EventEmitter();
    @Output() changeMoney: EventEmitter<number> = new EventEmitter();
    @Output() changeText: EventEmitter<string> = new EventEmitter();
    constructor(private http: HttpClient,private authen: AuthenticationService) {
        console.log("accountid",authen.currentUserValue.accountNumber);
        this.getAccount(authen.currentUserValue.accountNumber).then(
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
        let data = await this.http.get<any>('http://localhost:5000/api/BankAccount/accnum?accnum='+id);
        console.log("data",data);
        return data;
    }
    async getAccName(accnum:number){
        let data = await this.http.get<any>('http://localhost:5000/api/Account/accnum?AccNum='+accnum).subscribe(
            data=>{
                loginreceiacc = data;
                console.log("loginreice",loginreceiacc);
            }
        );
        console.log("name",data);
        return data;
    }
    signUp(name:string,pass:string,email:string){
        let user = {
            "Name":name,
            "Password":pass,
            "Email":email
        };
        console.log("user",user);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'});
        let options = { headers: headers };
        return this.http.post<any>('http://localhost:5000/api/Account',user,options);
        
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
    updateBalance(ba:object, type:number){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'});
        let options = { headers: headers };
        var id = this.getData()['id'];
        this.http.put('http://localhost:5000/api/BankAccount/' + type,ba,options).subscribe(
            data=>{
                console.log("success",ba['accountNumber']);
            },
            error=>{
                console.log("error",error);
            }
        )
    }
    async createTransaction(sender:number,receiver:number,content:string,money:number){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'});
        let options = { headers: headers };
        let trans = {
            "Sender":sender,
            "Receiver":receiver,
            "Content":content,
            "Money":money
        };
        return await this.http.post<any>('http://localhost:5000/api/Transaction',trans,options);
    }
    changePass(pass:string){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'});
        let options = { headers: headers };
        let acc = {
            "password":pass
        };
        return this.http.put<any>('http://localhost:5000/api/Account?id='+this.authen.currentUserValue.id,acc,options).pipe(
            map(
                data=>{
                    console.log("succ")
                    return true;
                },
                error=>{
                    console.log("fail")
                    return false;
                }
            )
        );
    }
    changeUsername(user:string,pass:string){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'});
        let options = { headers: headers };
        let acc = {
            "name":user,
            "password":pass
        };
        return this.http.put<any>('http://localhost:5000/api/Account/changeusername?id='+this.authen.currentUserValue.id,acc,options).pipe(
            map(
                data=>{
                    console.log("succ")
                    return true;
                },
                error=>{
                    console.log("fail")
                    return false;
                }
            )
        );
    }
    async getTransData(){
        return await this.http.get<any>('http://localhost:5000/api/Transaction?user='+this.authen.currentUserValue.accountNumber).pipe(
            map(data=>{
                if(data){             
                    this.listtrans = data;
                    console.log("data transitem",this.listtrans);
                }
            })
        )
    }
    SetAccount(term:number){
        this.acc = term;
        //console.log("called")
        this.changeAcc.emit(this.acc);
    }
    GetTrans(){
        return this.listtrans;
    }
    GetAcc(){
        console.log("acctrans",acctrans)
        return acctrans;
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