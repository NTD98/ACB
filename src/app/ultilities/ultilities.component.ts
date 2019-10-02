import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';
@Component({
  selector: 'app-ultilities',
  templateUrl: './ultilities.component.html',
  styleUrls: ['./ultilities.component.css']
})
export class UltilitiesComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
  

  ngOnInit() {
  }

}
