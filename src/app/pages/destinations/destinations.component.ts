import { Component } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent {
  destination = data.destinations;
  destinations: string[] = ['MOON', 'MARS', 'EUROPA', 'TITAN'];
  destinationIndex: number = 0;
  animate: boolean = false;

  switchDestination(event: Event): void {
    const target = event.target as HTMLElement;
    const selectedDestination = target.innerText;

    const newIndex = this.destinations.indexOf(selectedDestination);
    if (this.destinationIndex !== newIndex) this.handleAnimate();
    if (newIndex !== -1) this.destinationIndex = newIndex;
  }

  isActiveDestination(dest: string): boolean {
    return dest === this.destinations[this.destinationIndex];
  }

  handleAnimate(): void {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 500);
  }
}
