import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllUsers(): User[] {
    return [
      { id: 1, name: 'Musa Njie', email: 'mn@gmail.com', role: 'Admin' },
      { id: 2, name: 'Fatou Ceesay', email: 'fc@utg.edu.gm', role: 'User' },
      { id: 3, name: 'Kebba Sambo', email: 'ks@gmail.com', role: 'Editor' },
    ];
  }

  private apiUrl = 'http://localhost:3000/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
