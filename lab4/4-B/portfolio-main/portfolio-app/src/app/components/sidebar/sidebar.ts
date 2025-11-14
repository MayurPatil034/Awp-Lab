import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div style="background: #2c3e50; width: 335px; height: 100vh; padding: 30px 0; color: white; font-family: Arial, sans-serif;">
      <div style="text-align: center; margin-bottom: 40px;">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
        
        
        <!-- The updated circular image element -->
        <img src="https://media.licdn.com/dms/image/v2/D5603AQEJw2uuFMdytQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721474850620?e=1763596800&v=beta&t=SKEIXAbkF6AwWY-wOaWakcudi_PVl7yURKMaTz1NgXU" 

             style="width: 130px; height: 130px; border-radius: 50%; border: 3px solid #f39c12; margin: 0 auto 20px; display: block; object-fit: cover;">
        
    </div>
        <h1 style="color: #f39c12; margin: 0 0 10px 0; font-size: 32px;">Mayur Patil</h1>
        <p style="margin: 0; color: #bdc3c7; font-size: 14px;">Frontend Developer | Angular Expert</p>
      </div>
      
      <nav>
        <a routerLink="/about" routerLinkActive="active" 
           style="display: block; padding: 15px 30px; color: white; text-decoration: none; font-size: 16px; transition: background 0.3s;"
           [style.background]="'#3498db'"
           [style.border-radius]="'8px'"
           [style.margin]="'5px 10px'">
          1. About me
        </a>
        <a routerLink="/skills" routerLinkActive="active"
           style="display: block; padding: 15px 30px; color: white; text-decoration: none; font-size: 16px; transition: background 0.3s;"
           [style.border-radius]="'8px'"
           [style.margin]="'5px 10px'">
          2. Skills
        </a>
        <a routerLink="/certifications" routerLinkActive="active"
           style="display: block; padding: 15px 30px; color: white; text-decoration: none; font-size: 16px; transition: background 0.3s;"
           [style.border-radius]="'8px'"
           [style.margin]="'5px 10px'">
          3. Certifications
        </a>
        <a routerLink="/projects" routerLinkActive="active"
           style="display: block; padding: 15px 30px; color: white; text-decoration: none; font-size: 16px; transition: background 0.3s;"
           [style.border-radius]="'8px'"
           [style.margin]="'5px 10px'">
          4. Projects
        </a>
        <a routerLink="/contact" routerLinkActive="active"
           style="display: block; padding: 15px 30px; color: white; text-decoration: none; font-size: 16px; transition: background 0.3s;"
           [style.border-radius]="'8px'"
           [style.margin]="'5px 10px'">
          5. Contact
        </a>
       
      </nav>
    </div>
  `,
  styles: [`
    a:hover {
      background: #34495e !important;
    }
    a.active {
      background: #3498db !important;
    }
  `]
})
export class SidebarComponent { }