import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mobileMenuIcon = '../../../assets/shared/icon-hamburger.svg'
  isActive = false

  toggleMobileMenu(){
    if(!this.isActive) {
      this.mobileMenuIcon = "../../../assets/shared/icon-close.svg";
      this.isActive = !this.isActive
    } else {
      this.mobileMenuIcon =  "../../../assets/shared/icon-hamburger.svg";
      this.isActive = !this.isActive
    }
  }

}
