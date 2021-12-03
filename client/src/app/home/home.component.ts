import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  registerMode: boolean = false;

  ngOnInit(): void {}
  registerToggle(): void {
    this.registerMode = !this.registerMode;
  }
}
