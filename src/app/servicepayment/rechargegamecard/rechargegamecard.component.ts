import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-rechargegamecard',
  templateUrl: './rechargegamecard.component.html',
  styleUrls: ['./rechargegamecard.component.css']
})
export class RechargegamecardComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
