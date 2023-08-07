import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  mobileMenuIcon: string = '../../../assets/shared/icon-hamburger.svg';
  isActive: boolean = false;

  toggleMobileMenu(): void {
    if (!this.isActive) {
      this.mobileMenuIcon = '../../../assets/shared/icon-close.svg';
      this.isActive = !this.isActive;
    } else {
      this.mobileMenuIcon = '../../../assets/shared/icon-hamburger.svg';
      this.isActive = !this.isActive;
    }
  }
}
