import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-activatedisableaccount',
  templateUrl: './activatedisableaccount.component.html',
  styleUrls: ['./activatedisableaccount.component.css']
})
export class ActivatedisableaccountComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
