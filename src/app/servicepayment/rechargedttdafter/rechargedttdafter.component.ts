import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-rechargedttdafter',
  templateUrl: './rechargedttdafter.component.html',
  styleUrls: ['./rechargedttdafter.component.css']
})
export class RechargedttdafterComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
