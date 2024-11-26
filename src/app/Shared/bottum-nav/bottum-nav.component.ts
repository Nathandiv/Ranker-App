import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottum-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './bottum-nav.component.html',
  styleUrl: './bottum-nav.component.css'
})
export class BottumNavComponent {

}
