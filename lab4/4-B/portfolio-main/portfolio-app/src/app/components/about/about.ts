// 1. Use the default import
import $ from 'jquery';

import { Component, AfterViewInit } from '@angular/core'; 

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div id="container" style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; margin-bottom: 20px;">About Me</h2>
      <p style="color: #555; line-height: 1.8; font-size: 16px;">
        Hi! I'm Mayur Patil, a passionate Frontend Developer specializing in Angular framework. 
        I have extensive experience in building modern, responsive web applications.
      </p>
      <p style="color: #555; line-height: 1.8; font-size: 16px;">
        With a strong foundation in web technologies, I focus on creating user-friendly interfaces 
        and delivering high-quality code. I enjoy solving complex problems and continuously learning 
        new technologies to improve my skills.
      </p>
      <div style="margin-top: 30px;">
        <h3 style="color: #2c3e50; margin-bottom: 15px;">Expertise</h3>
        <ul style="color: #555; line-height: 2; font-size: 15px;">
          <li>Angular Framework Development</li>
          <li>Responsive Web Design</li>
          <li>TypeScript & JavaScript</li>
          <li>HTML5 & CSS3</li>
        </ul>
      </div>
    </div>
  `
})
export class AboutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // 2. Now this will work
    // (I am using the selector from your error message)
    $('#container').css('opacity', 0).animate({ opacity: 1 }, 1000);
  }

}