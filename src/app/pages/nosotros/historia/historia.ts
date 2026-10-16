import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface EtapaHistoria {
  numero: string;
  fecha: string;
  titulo: string;
  descripcion: string;
  detalle: string;
  imagen: string;
  color: string;
}

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './historia.html',
  styleUrl: './historia.css'
})
export class Historia {

  etapaActiva = 0;

  etapas: EtapaHistoria[] = [
    {
      numero: '01',
      fecha: '30 DE SETIEMBRE · 2016',
      titulo: 'El primer paso',
      descripcion:
        'Ubuntu Jóvenes Voluntarios Perú inicia su labor con un pequeño equipo de jóvenes universitarios.',
      detalle:
        'Su primer voluntariado se realizó en la zona de Pachacútec – Ventanilla, Perú.',
      imagen: '/imagenes/IMG_20211017_092641_907.jpg',
      color: '#D60000'
    },
    {
      numero: '02',
      fecha: 'DESDE 2016',
      titulo: 'El trabajo en campo',
      descripcion:
        'Ubuntu fue construyendo su identidad alrededor de la presencia directa en los lugares donde se necesita apoyo.',
      detalle:
        'El trabajo en campo se convirtió en parte del valor diferencial de la organización: estar presentes, apoyar y acompañar.',
      imagen: '/imagenes/PSX_20241001_083825.jpg',
      color: '#2E8B57'
    },
    {
      numero: '03',
      fecha: 'A TRAVÉS DE LOS AÑOS',
      titulo: 'Más personas se suman',
      descripcion:
        'La organización fue creciendo junto con una comunidad de voluntarios, profesionales, pasantes y pobladores.',
      detalle:
        'Este equipo interdisciplinario y multicultural se organiza para desarrollar las diferentes líneas de acción de Ubuntu.',
      imagen: '/imagenes/voluntarios.png',
      color: '#2E6F95'
    },
    {
      numero: '04',
      fecha: 'UBUNTU HOY',
      titulo: 'Una comunidad en movimiento',
      descripcion:
        'Ubuntu desarrolla iniciativas en diferentes territorios y continúa construyendo una comunidad de agentes de cambio.',
      detalle:
        'La organización mantiene como parte de su identidad la colaboración y la filosofía: “Yo soy porque todos somos”.',
      imagen: '/imagenes/PORTADA.jpg',
      color: '#E85D8E'
    }
  ];

  seleccionarEtapa(index: number): void {
    this.etapaActiva = index;
  }

  siguiente(): void {
    this.etapaActiva =
      (this.etapaActiva + 1) % this.etapas.length;
  }

  anterior(): void {
    this.etapaActiva =
      (this.etapaActiva - 1 + this.etapas.length) %
      this.etapas.length;
  }

  get etapaActual(): EtapaHistoria {
    return this.etapas[this.etapaActiva];
  }
}