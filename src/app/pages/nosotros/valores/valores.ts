import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Valor {
  numero: string;
  nombre: string;
  descripcion: string;
  frase: string;
  icono: string;
  color: string;
  fondo: string;
}

@Component({
  selector: 'app-valores',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './valores.html',
  styleUrl: './valores.css'
})
export class Valores {
  valorActivo = 0;

  valores: Valor[] = [
    {
      numero: '01',
      nombre: 'Compromiso',
      descripcion:
        'Participamos activamente en las iniciativas y asumimos responsabilidad en las acciones que desarrollamos.',
      frase:
        'Cuando nos comprometemos, nuestras intenciones se convierten en acciones.',
      icono: 'fa-solid fa-hand-fist',
      color: '#D60000',
      fondo: '#FFF0F0'
    },
    {
      numero: '02',
      nombre: 'Solidaridad',
      descripcion:
        'Acompañamos a personas y comunidades desde la empatía, la colaboración y la disposición para ayudar.',
      frase:
        'Ayudar también significa escuchar, acompañar y estar presentes.',
      icono: 'fa-solid fa-hand-holding-heart',
      color: '#E85D8E',
      fondo: '#FFF0F6'
    },
    {
      numero: '03',
      nombre: 'Inclusión',
      descripcion:
        'Promovemos espacios donde diferentes personas puedan participar y aportar desde sus capacidades.',
      frase:
        'Cada persona tiene algo valioso que aportar a nuestra comunidad.',
      icono: 'fa-solid fa-people-group',
      color: '#2878A5',
      fondo: '#EDF7FF'
    },
    {
      numero: '04',
      nombre: 'Trabajo en equipo',
      descripcion:
        'Sumamos conocimientos, experiencias y capacidades para desarrollar nuestras iniciativas.',
      frase:
        'Cuando unimos nuestras capacidades, podemos construir más juntos.',
      icono: 'fa-solid fa-people-arrows-left-right',
      color: '#D99A00',
      fondo: '#FFF8DF'
    }
  ];

  seleccionarValor(index: number): void {
    this.valorActivo = index;
  }

  siguiente(): void {
    this.valorActivo =
      (this.valorActivo + 1) % this.valores.length;
  }

  anterior(): void {
    this.valorActivo =
      (this.valorActivo - 1 + this.valores.length) %
      this.valores.length;
  }

  get valorActual(): Valor {
    return this.valores[this.valorActivo];
  }
}