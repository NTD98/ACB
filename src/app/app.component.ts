import { Component,HostListener } from '@angular/core';
import {LoginService} from './module/login/login.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ACB';
  constructor(private loginService: LoginService) { }
  ngOnInit(){
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(this.loginService.detectmob());
    this.loginService.detectmob();
  }
}
