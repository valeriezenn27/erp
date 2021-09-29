import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title = 'ERP PROTOTYPE';
  currentUser: string = '';

  @Output() toggleSidenav = new EventEmitter<void>();

  ngOnInit(): void {
    this.currentUser = 'anonymous';
  }
}
