import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-ecomerceservice',
  templateUrl: './ecomerceservice.component.html',
  styleUrls: ['./ecomerceservice.component.css']
})
export class EcomerceserviceComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
