import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  @ViewChild("Carrito") carrousel!: ElementRef;
  valor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  retroceder() {
    const contenedorCarrousel = this.carrousel.nativeElement;
    this.valor += 30;
    contenedorCarrousel.style.transform = `translateX(${this.valor}%)`
    if (this.valor == 60) {
      contenedorCarrousel.style.transform = `translateX(0%)`
      this.valor = 0;
    }
  }

  avanzar() {
    const contenedorCarrousel = this.carrousel.nativeElement;
    this.valor -= 30;
    contenedorCarrousel.style.transform = `translateX(${this.valor}%)`
    if (this.valor == -60) {
      contenedorCarrousel.style.transform = `translateX(0%)`
      this.valor = 0;
    }
  }


}
