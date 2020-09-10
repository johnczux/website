import { Component, OnInit } from '@angular/core';
import { CookieHandlerService } from "../cookie-handler.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


homeLink : boolean = true;
projectsLink : boolean = false;
experimentalLink : boolean = false;

switchCheck : boolean = false;

  constructor(private cookieHandler  : CookieHandlerService ) { }
  

linkClicked(linkClicked)
{
 
  this.homeLink = this.projectsLink = this.experimentalLink = false;

  if(linkClicked == "home")
   this.homeLink = true;

  else if (linkClicked == "project")
   this.projectsLink = true;

  else
   this.experimentalLink = true;


}
changeTheme()
{
 if(this.switchCheck == false)
 {
  this.cookieHandler.setCookie();
   this.switchCheck = true;
   document.documentElement.setAttribute('data-theme', 'dark')
 }
 else
 {
  this.cookieHandler.deleteCookie();
   this.switchCheck = false;
   document.documentElement.setAttribute('data-theme', 'light')
 }
 
 
}

  ngOnInit(): void {

    if(this.cookieHandler.findCookie() == true)
    {
      this.switchCheck = true;
    let checkbox = <HTMLInputElement> document.getElementById("toggleSwitch");
    checkbox.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark')
    }
  }


}
