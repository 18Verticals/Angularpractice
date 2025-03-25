import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: false,
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.scss'
})
export class NgTemplateComponent {
loggedUserName:string="Divya";
isUserLoggedIn:boolean=true;
}
