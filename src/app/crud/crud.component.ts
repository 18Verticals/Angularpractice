import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../Service/fake-api.service';

@Component({
  selector: 'app-crud',
  standalone: false,
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
  export class CrudComponent implements OnInit {
    users: any[] = [];
    newUser = { name: '', email: '' };
    editUser: any = null;
  
    constructor(private fakeApiService: FakeApiService) { }
  
    ngOnInit(): void {
      this.loadUsers();
    }
  
    loadUsers(): void {
      this.fakeApiService.getUsers().subscribe(data => {
        this.users = data;
      });
    }
  
    createUser(): void {
      this.fakeApiService.createUser(this.newUser).subscribe(user => {
        this.users.push(user);
        this.newUser = { name: '', email: '' }; 
      });
    }
  
    editUserUser(user: any): void {
      this.editUser = { ...user };
    }
  
    updateUser(): void {
      if (this.editUser) {
        this.fakeApiService.updateUser(this.editUser).subscribe(user => {
          const index = this.users.findIndex(u => u.id === user.id);
          if (index !== -1) {
            this.users[index] = user;
          }
          this.editUser = null; 
        });
      }
    }
  
    deleteUser(id: number): void {
      this.fakeApiService.deleteUser(id).subscribe(response => {
        this.users = this.users.filter(user => user.id !== id);
      });
    }
  }
  

