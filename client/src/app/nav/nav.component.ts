import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn: boolean = false;

  currentUser$: Observable<User | null>;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // this.getCurrentUser();
    this.currentUser$ = this.accountService.currentUser$;
  }

  login(): void {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
        // this.loggedIn = true;
      },
      (error) => console.log(error)
    );
  }
  logout(): void {
    this.accountService.logout();
    // this.loggedIn = false;
  }
  // getCurrentUser() {
  //   // the below code will drive to memory leak because the observal will not be closed
  //   this.accountService.currentUser$.subscribe((user) => {
  //     //!!user; if user is null => false , other wise return true
  //     console.log('getCurrentUser', user, !!user);
  //     this.loggedIn = !!user;
  //   });
  // }
}
