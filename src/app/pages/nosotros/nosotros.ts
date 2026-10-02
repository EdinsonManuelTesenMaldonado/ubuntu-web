import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class Nosotros implements OnInit, OnDestroy {

  anio = 0;
  voluntarios = 0;
  pasantes = 0;
  lineas = 0;

  private intervalos: ReturnType<typeof setInterval>[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.animarNumero('anio', 2016, 1200);

    this.animarNumero('voluntarios', 700, 1200);

    this.animarNumero('pasantes', 300, 1200);

    this.animarNumero('lineas', 4, 800);
  }


  animarNumero(
    propiedad: 'anio' | 'voluntarios' | 'pasantes' | 'lineas',
    objetivo: number,
    duracion: number
  ): void {

    const pasos = 40;

    const incremento = objetivo / pasos;

    const tiempo = duracion / pasos;

    let actual = 0;


    const intervalo = setInterval(() => {

      actual += incremento;


      if (actual >= objetivo) {

        this[propiedad] = objetivo;

        clearInterval(intervalo);

        this.cdr.detectChanges();

        return;
      }


      this[propiedad] = Math.floor(actual);

      this.cdr.detectChanges();

    }, tiempo);


    this.intervalos.push(intervalo);
  }


  ngOnDestroy(): void {

    this.intervalos.forEach(intervalo => {
      clearInterval(intervalo);
    });

    this.intervalos = [];

  }

}