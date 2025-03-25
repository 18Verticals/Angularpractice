import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showTable: boolean=false;
  user={
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }

  submittedData:any[] =[];
  
  onSubmit(userForm:any){
      if(userForm.valid){
         this.submittedData.push({...this.user});
         this.user={firstName:'',lastName:'',email:'',phone:''}
         userForm.resetForm();
      }
  }

}
