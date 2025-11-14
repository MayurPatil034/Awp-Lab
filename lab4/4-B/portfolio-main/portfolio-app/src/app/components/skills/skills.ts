import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; margin-bottom: 30px;">Skills</h2>
      
      <div *ngFor="let skill of skills" style="margin-bottom: 25px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="color: #2c3e50; font-weight: bold; font-size: 15px;">{{skill.name}}</span>
          <span style="color: #3498db; font-weight: bold;">{{skill.level}}%</span>
        </div>
        <div style="background: #ecf0f1; height: 20px; border-radius: 10px; overflow: hidden;">
          <div [style.width.%]="skill.level" 
               style="background: linear-gradient(90deg, #3498db, #2980b9); height: 100%; transition: width 0.5s;">
          </div>
        </div>
      </div>
    </div>
  `
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3/SCSS', level: 90 },
    { name: 'RxJS', level: 80 },
    { name: 'Git', level: 85 }
  ];
}