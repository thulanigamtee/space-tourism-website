import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { fadeIn } from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn],
})
export class AppComponent {
  constructor(private router: Router) {
    this.setBodyClass();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setBodyClass();
      }
    });
  }

  private setBodyClass() {
    const currentRoute = this.router.url;
    const body = document.body;

    const routes: { [key: string]: string } = {
      '/destination': 'destination',
      '/crew': 'crew',
      '/technology': 'technology',
    };

    body.className = routes[currentRoute];
  }
}
