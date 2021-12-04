import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // this.getCurrentUser();
    this.currentUser$ = this.accountService.currentUser$;
  }

  login(): void {
    console.log(this.model);
    // this.accountService.login(this.model).subscribe(
    //   (response) => {
    //     console.log(response);
    //     // this.loggedIn = true;
    //     this.router.navigateByUrl('/members');
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.toastr.error(error.error);

    //   }
    // );

    //no need to handle the error like above code , handled in the interceptors

    this.accountService.login(this.model).subscribe((response) => {
      console.log(response);
      // this.loggedIn = true;
      this.router.navigateByUrl('/members');
    });
  }
  logout(): void {
    this.accountService.logout();
    // this.loggedIn = false;
    this.router.navigateByUrl('/');
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
