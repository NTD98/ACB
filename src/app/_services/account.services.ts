import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';
let account:object;
@Injectable({ providedIn: 'root' })
export class AccountService {
    acc:any;
    constructor(private http: HttpClient) {
        console.log("acountser")
        this.getAccount(1).subscribe(function(data){
            account = data;
            console.log("dataservice",account);
        });
    }

    getAccount(id:number){
        let data = this.http.get<any>('http://localhost:5000/api/BankAccount/3');
        return data;
    }
    getData(){
        return account;
    }
}