import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-signuplimit',
  templateUrl: './signuplimit.component.html',
  styleUrls: ['./signuplimit.component.css']
})
export class SignuplimitComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
