import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landing-ppage',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './landing-ppage.component.html',
  styleUrl: './landing-ppage.component.css'
})
export class LandingPpageComponent {

}
