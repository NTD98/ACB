import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-lockunlockcard',
  templateUrl: './lockunlockcard.component.html',
  styleUrls: ['./lockunlockcard.component.css']
})
export class LockunlockcardComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
