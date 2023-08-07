import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import data from '../../data.json';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  technology = data.technology;
  technologies: number[] = [1, 2, 3];
  technologyIndex: number = 0;
  imageLandscape = this.technology[this.technologyIndex].images.landscape;
  imagePortrait = this.technology[this.technologyIndex].images.portrait;
  imageTechnology = this.imageLandscape;
  isBigScreen = false;
  animate: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe('(min-width: 1024px)')
      .pipe(map((result) => result.matches))
      .subscribe((matches) => {
        this.isBigScreen = matches;
        this.isBigScreen
          ? (this.imageTechnology = this.imagePortrait)
          : (this.imageTechnology = this.imageLandscape);
      });
  }

  switchTechnology(event: Event): void {
    const target = event.target as HTMLElement;
    const selectedTechnology = target.innerText;

    const newIndex = this.technologies.indexOf(Number(selectedTechnology));
    if (this.technologyIndex !== newIndex) this.handleAnimate();
    if (newIndex !== -1) this.technologyIndex = newIndex;
  }

  isActiveTechnology(tech: number): boolean {
    return tech === this.technologies[this.technologyIndex];
  }

  handleAnimate(): void {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 500);
  }
}
