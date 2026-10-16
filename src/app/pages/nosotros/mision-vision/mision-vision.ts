import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Pilar {
  tipo: string;
  numero: string;
  titulo: string;
  texto: string;
  color: string;
  icono: string;
}

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mision-vision.html',
  styleUrl: './mision-vision.css'
})
export class MisionVision {

  pilarActivo = 0;

  pilares: Pilar[] = [
    {
      tipo: 'MISIÓN',
      numero: '01',
      titulo: 'Lo que hacemos',
      texto:
        'Desarrollar proyectos innovadores y sostenibles, así como campañas de concientización que contribuyan a apoyar y generar un impacto positivo en comunidades vulnerables de todo el país.',
      color: '#D60000',
      icono: 'fa-solid fa-hands-holding-child'
    },
    {
      tipo: 'VISIÓN',
      numero: '02',
      titulo: 'Hacia dónde vamos',
      texto:
        'Como organización, buscamos llegar a todos los departamentos del país, promoviendo nuestra filosofía y cultura para seguir construyendo una sociedad basada en la igualdad, el respeto y una mejor calidad de vida.',
      color: '#2E6F95',
      icono: 'fa-solid fa-earth-americas'
    }
  ];

  seleccionarPilar(index: number): void {
    this.pilarActivo = index;
  }

  siguientePilar(): void {
    this.pilarActivo =
      (this.pilarActivo + 1) % this.pilares.length;
  }

  anteriorPilar(): void {
    this.pilarActivo =
      (this.pilarActivo - 1 + this.pilares.length) %
      this.pilares.length;
  }

  get pilarActual(): Pilar {
    return this.pilares[this.pilarActivo];
  }
}