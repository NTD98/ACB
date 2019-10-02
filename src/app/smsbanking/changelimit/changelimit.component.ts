import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-changelimit',
  templateUrl: './changelimit.component.html',
  styleUrls: ['./changelimit.component.css']
})
export class ChangelimitComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
