import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  dob: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // return this.http.get<User[]>(this.apiUrl);
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${user.id}`);
  }

  
}
