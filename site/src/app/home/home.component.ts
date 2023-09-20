import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menuOpen = false;
  dropdown = false;
  public screenWidth: any = window.innerWidth;
  navbarSolid = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.navbarSolid = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.dropdown = false;
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }
}
