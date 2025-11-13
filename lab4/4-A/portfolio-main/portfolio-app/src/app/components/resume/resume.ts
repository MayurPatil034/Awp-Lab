import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about';
import { SkillsComponent } from '../skills/skills';
import { CertificationsComponent } from '../certifications/certifications';
import { ProjectsComponent } from '../projects/projects';
import { ContactComponent } from '../contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];