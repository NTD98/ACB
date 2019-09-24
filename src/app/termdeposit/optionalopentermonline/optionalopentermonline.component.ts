import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-optionalopentermonline',
  templateUrl: './optionalopentermonline.component.html',
  styleUrls: ['./optionalopentermonline.component.css']
})
export class OptionalopentermonlineComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
