import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { CertificationsComponent } from './components/certifications/certifications';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';


export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },

];