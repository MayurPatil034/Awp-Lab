import { Component, AfterViewInit } from '@angular/core'; // 1. Import AfterViewInit
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar';
import $ from 'jquery'; // 2. Use the correct default import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div style="display: flex; height: 100vh; margin: 0; font-family: Arial, sans-serif;">
      <app-sidebar></app-sidebar>
      
      <div id="main-content" style="flex: 1; padding: 40px; overflow-y: auto; background: #ecf0f1;">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent implements AfterViewInit { // 4. Implement AfterViewInit
  title = 'portfolio-app';

  constructor() { }

  // 5. Run jQuery code *after* the view is built
  ngAfterViewInit(): void {
    // Example: Fade in the main content area
    // This is not a good idea as it will re-run on every
    // hot-reload and is not how Angular Animations work.
    $('#main-content').css('opacity', 0).animate({ opacity: 1 }, 500);
  }
}