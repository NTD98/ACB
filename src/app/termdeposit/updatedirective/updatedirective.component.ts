import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-updatedirective',
  templateUrl: './updatedirective.component.html',
  styleUrls: ['./updatedirective.component.css']
})
export class UpdatedirectiveComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
