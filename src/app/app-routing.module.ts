import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' },
  },
  {
    path: 'destination',
    component: DestinationsComponent,
    data: { animation: 'destination' },
  },
  {
    path: 'crew',
    component: CrewComponent,
    data: { animation: 'crew' },
  },
  {
    path: 'technology',
    component: TechnologyComponent,
    data: { animation: 'technology' },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
