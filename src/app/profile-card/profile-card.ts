import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I enjoy exploring new technologies, learning new skills, and bringing creative ideas to life through web development. I am always looking for opportunities to grow and improve.';
}
