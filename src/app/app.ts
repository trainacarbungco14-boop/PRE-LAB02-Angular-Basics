import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Traina C. Carbungco';
  location = 'Angeles City, Pampanga';
  email = 'trainacarbungco14@gmail.com';
  phone = '0920 831 9972';

  profile = 'I am an Information Technology student specializing in Web Development. I am passionate about creating responsive and user-friendly websites while continuously improving my programming skills and exploring new technologies.';


  education = [
  {
    school: 'Holy Angel University',
    degree: 'Bachelor of Science in Information Technology',
    specialization: 'Major in Web Development',
    year: '2024 – 2028'
  }
];

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  interests = [
    'Web Development',
    'Exploring New Technologies',
    'Creative Designing',
    'Learning New Skills'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
