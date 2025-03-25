import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }
  createUser(user: any): Observable<any> {
    return of({ id: Math.random(), ...user });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateUser(user: any): Observable<any> {
    return of({ ...user });
  }

  deleteUser(id: number): Observable<any> {
    return of({ message: 'User deleted', id });
  }
}
