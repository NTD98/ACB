import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-fasttransferoutacb',
  templateUrl: './fasttransferoutacb.component.html',
  styleUrls: ['./fasttransferoutacb.component.css']
})
export class FastTransferOutACBComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
