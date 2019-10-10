import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-payadsl',
  templateUrl: './payadsl.component.html',
  styleUrls: ['./payadsl.component.css']
})
export class PayadslComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
