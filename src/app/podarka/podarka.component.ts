import { Component } from '@angular/core';

@Component({
  selector: 'app-podarka',
  imports: [],
  templateUrl: './podarka.component.html',
  styleUrl: './podarka.component.css'
})
export class PodarkaComponent {
  isOpened = false;

  openEnvelope() {
    this.isOpened = true;
  }
}
