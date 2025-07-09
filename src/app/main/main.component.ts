import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports : [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('otkritki') otkritkiRef!: ElementRef;

  constructor(private route:Router){}
  cards = [
    { image: 'assets/a1.jpg', alt: 'Құттықтау 1', message: '💖 Мамочка! Бүгін сенің туған күнің – мен үшін ең керемет күн!' },
    { image: 'assets/a2.jpg', alt: 'Құттықтау 2', message: '🌸 Анашым, сен мен үшін бәрінен қымбатсың!' },
    { image: 'assets/a3.jpg', alt: 'Құттықтау 3', message: '👩‍👧 Мама! Сенсіз өмірім бос болар еді.' },
    { image: 'assets/a4.jpg', alt: 'Құттықтау 4', message: '🥰 Қымбатты мама! Сен менің өмірімдегі ең жақын адамсың.' },
    { image: 'assets/a5.jpg', alt: 'Құттықтау 5', message: '🎈 Мамочка! Мен саған тек бақыт, денсаулық тілеймін!' }
  ];

  startPozdravlenye() {
    this.otkritkiRef.nativeElement.style.display = 'flex';
  }

  startMusic() {
    const audio = document.getElementById('tuganKun') as HTMLAudioElement;
    audio?.play();
  }

  goTo(){
    this.route.navigate(['/gift'])
  }
}