import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-finalizationtermdeposit',
  templateUrl: './finalizationtermdeposit.component.html',
  styleUrls: ['./finalizationtermdeposit.component.css']
})
export class FinalizationtermdepositComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
