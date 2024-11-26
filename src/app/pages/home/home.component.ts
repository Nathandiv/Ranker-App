import { Component } from '@angular/core';
import { BottumNavComponent } from "../../Shared/bottum-nav/bottum-nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BottumNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
