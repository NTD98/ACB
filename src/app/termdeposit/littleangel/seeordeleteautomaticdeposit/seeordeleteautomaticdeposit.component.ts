import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';

@Component({
  selector: 'app-seeordeleteautomaticdeposit',
  templateUrl: './seeordeleteautomaticdeposit.component.html',
  styleUrls: ['./seeordeleteautomaticdeposit.component.css']
})
export class SeeordeleteautomaticdepositComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
