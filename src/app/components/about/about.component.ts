import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  carrosselIndex = 0;
  midias = [
    { type: 'video', src: 'assets/video/quarto.mp4', alt: 'Perfuração de poço artesiano em andamento' },
    { type: 'video', src: 'assets/video/welcome.mp4', alt: 'Vídeo de perfuração' },
    { type: 'video', src: 'assets/video/inicio.mp4', alt: 'Perfuração de poço artesiano em andamento' },
    { type: 'video', src: 'assets/video/segundo.mp4', alt: 'Perfuração de poço artesiano em andamento' },
    { type: 'video', src: 'assets/video/terceiro.mp4', alt: 'Perfuração de poço artesiano em andamento' },
  ];

  anterior() {
    this.carrosselIndex = (this.carrosselIndex - 1 + this.midias.length) % this.midias.length;
  }
  proximo() {
    this.carrosselIndex = (this.carrosselIndex + 1) % this.midias.length;
  }

}
