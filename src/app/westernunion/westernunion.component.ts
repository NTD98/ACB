import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-westernunion',
  templateUrl: './westernunion.component.html',
  styleUrls: ['./westernunion.component.css']
})
export class WesternUnionComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
 

  ngOnInit() {
  }

}
