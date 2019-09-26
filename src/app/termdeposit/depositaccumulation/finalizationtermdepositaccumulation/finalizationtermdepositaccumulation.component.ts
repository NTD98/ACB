import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';

@Component({
  selector: 'app-finalizationtermdepositaccumulation',
  templateUrl: './finalizationtermdepositaccumulation.component.html',
  styleUrls: ['./finalizationtermdepositaccumulation.component.css']
})
export class FinalizationtermdepositaccumulationComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
