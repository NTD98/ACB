import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';

@Component({
  selector: 'app-updatedirectiveaccumulation',
  templateUrl: './updatedirectiveaccumulation.component.html',
  styleUrls: ['./updatedirectiveaccumulation.component.css']
})
export class UpdatedirectiveaccumulationComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
