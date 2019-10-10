import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-rechargedttd',
  templateUrl: './rechargedttd.component.html',
  styleUrls: ['./rechargedttd.component.css']
})
export class RechargedttdComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
