import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieHandlerService {

  constructor() { }

  setCookie()
  {
    let date = new Date();

    date.setTime(date.getTime() + (256 * 24 * 60 * 60 * 1000));
    document.cookie = "darkTheme=yes; expires="+date.toUTCString()+"; path=/";
  }
  findCookie()
  {
    let myCookie = document.cookie;
    if(myCookie == "")
    {
      return false;
    }
    else
    {
      return true;
    }
    
  }
  deleteCookie()
  {
    let date = new Date();

    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
    document.cookie = "darkTheme=yes; expires="+date.toUTCString()+"; path=/";
  }
}
