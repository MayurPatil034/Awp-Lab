import { Component, AfterViewInit } from '@angular/core'; // 1. Import AfterViewInit
import { CommonModule } from '@angular/common';
import $ from 'jquery'; // 2. Use the correct default import

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; margin-bottom: 30px;">Certifications</h2>
      
      <div *ngFor="let cert of certifications" 
           class="cert-card" 
           style="background: #f8f9fa; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #3498db;">
        <h3 style="color: #2c3e50; margin: 0 0 10px 0; font-size: 18px;">{{cert.title}}</h3>
        <p style="color: #7f8c8d; margin: 5px 0; font-size: 14px;">{{cert.issuer}}</p>
        <p style="color: #95a5a6; margin: 5px 0; font-size: 13px;">{{cert.date}}</p>
      </div>
    </div>
  `
})
export class CertificationsComponent implements AfterViewInit { // 3. Implement AfterViewInit
  certifications = [
    {
      title: 'Angular - The Complete Guide',
      issuer: 'Udemy',
      date: 'January 2024'
    },
    {
      title: 'TypeScript Developer Certification',
      issuer: 'Microsoft',
      date: 'November 2023'
    },
    {
      title: 'Frontend Web Development',
      issuer: 'Coursera',
      date: 'August 2023'
    }
  ];

  constructor() { }

  // 4. Run jQuery code *after* the view is built
  ngAfterViewInit(): void {
    // Example: Fade in each card one by one.
    // This is a bad practice. Use Angular Animations for this.
    $('.cert-card').hide().each(function (index) {
      $(this).delay(index * 200 ).fadeIn(500);
    });
  }
}