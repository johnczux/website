import { Component, OnInit } from '@angular/core';

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

  constructor( ) { }

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
   this.switchCheck = true;
 }
 else
 {
   this.switchCheck = false;
 }
 
 this.themeChange();
}

themeChange()
{
  if(this.switchCheck == true)
  {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  else
  {
    document.documentElement.setAttribute('data-theme', 'light')
  }
  
}

  ngOnInit(): void {}


}
