import { Routes } from '@angular/router';
import { UserComponent } from './Pages/user/user.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ExperienceComponent } from './Pages/experience/experience.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
];
