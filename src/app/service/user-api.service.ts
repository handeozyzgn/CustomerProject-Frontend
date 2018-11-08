import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserApiService {
// private userApiUrl = 'http://localhost:8080/users';
private userApiUrl = '/api';


 constructor(private http: HttpClient) {}
  public getUsers() {
    return this.http.get<User[]>(this.userApiUrl);
  }
  public createUser(user) {
    return this.http.post<User>(this.userApiUrl, user);
  }
   public deleteUser(user) {
    return this.http.delete(this.userApiUrl + '/' + user.id);
  }
  public changeUser(user) {
    return this.http.put(this.userApiUrl + '/' + user.id, user);
  }

  /*public getUsers(): Promise<User[]> {
      console.log('hande');
      return this.http.get(this.userApiUrl)
            .toPromise()
            .then(response => response.json() as User[]);
  }
  createUser(newUser: User): Promise<User> {
    return this.http.post(this.userApiUrl, newUser)
      .toPromise().then(response => response.json() as User);
  }*/

}
