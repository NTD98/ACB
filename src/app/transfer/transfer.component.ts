import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
