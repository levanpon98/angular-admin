import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  adminFullName: string;

  constructor() { }

  ngOnInit() {
    this.adminFullName = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
  }

}
