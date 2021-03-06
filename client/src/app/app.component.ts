import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'The Dating App';

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {
    console.log('http', http);
  }
  setCurrentUser() {
    const storedUser = localStorage.getItem('user');
    if (typeof storedUser === 'string') {
      const user: User = JSON.parse(storedUser);
      console.log('user', user);
      this.accountService.setCurrentUser(user);
    }
  }
  ngOnInit(): void {
    this.setCurrentUser();
  }
}
