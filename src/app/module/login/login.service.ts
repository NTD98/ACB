import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class LoginService {

  isLogin = false;
  isMobile = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  getStatus(){
      console.log(this.isLogin)
      return this.isLogin;
  }
  toggle() {
    this.isLogin = !this.isLogin;
    this.change.emit(this.isLogin);
  }
  detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
      this.isMobile=true;
      console.log("true");
     }
    else {
      console.log("false");
      this.isMobile=false;
     }
   }
}