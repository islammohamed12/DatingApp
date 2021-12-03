import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  //services are injectable
  //services are singleton , data stored in service will not be destoried till closing the browser

  baseUrl = 'https://localhost:5001/api/';

  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}
  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = <User>response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }
  setCurrentUser(user: User) {
    console.log('setCurrentUser', JSON.stringify(user));
    this.currentUserSource.next(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
