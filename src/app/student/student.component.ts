import { Component } from '@angular/core';
import { User } from '../../intefaces/User.interface';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
user:User={
  id:1,
  name:'Divya',
  email:'divya@gmail.com'
}
}
