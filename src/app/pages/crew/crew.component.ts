import { Component } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent {
  crew = data.crew;
  members: string[] = ['DOUGLAS', 'MARK', 'VICTOR', 'ANOUSHEH'];
  memberIndex: number = 0;
  animate: boolean = false;

  switchMember(event: Event): void {
    const target = event.target as HTMLElement;
    const selectedMember = target.innerText;

    const newIndex = this.members.indexOf(selectedMember);
    if (newIndex !== -1) {
      this.memberIndex = newIndex;
      this.handleAnimate();
    }
  }

  isActiveMember(member: string): boolean {
    return member === this.members[this.memberIndex];
  }

  handleAnimate(): void {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 500);
  }
}
