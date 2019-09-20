import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() { 
   
  }

}
