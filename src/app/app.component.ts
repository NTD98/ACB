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
    console.log(window.innerWidth);
    if(window.innerWidth<1000)
    {
      this.loginService.isMobile=true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    
    this.loginService.detectmob();
    
  }
}
