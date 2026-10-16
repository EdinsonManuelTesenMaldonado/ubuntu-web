
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Integrante {
  numero: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  icono: string;
  color: string;
  fondo: string;
  detalle: string;
}

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './equipo.html',
  styleUrl: './equipo.css'
})
export class Equipo {
  integranteActivo: number | null = null;

  integrantes: Integrante[] = [
    {
      numero: '01',
      nombre: 'Profesionales',
      descripcion:
        'Aportan sus conocimientos y experiencia al desarrollo de las iniciativas.',
      imagen: '/imagenes/AQUI-FOTO-PROFESIONALES.jpg',
      icono: 'fa-solid fa-user-tie',
      color: '#D60000',
      fondo: '#FFF0F0',
      detalle:
        'Su experiencia y conocimientos contribuyen a organizar, acompañar y desarrollar las iniciativas de Ubuntu.'
    },
    {
      numero: '02',
      nombre: 'Voluntarios',
      descripcion:
        'Jóvenes que participan activamente en las actividades y proyectos de Ubuntu.',
      imagen: '/imagenes/AQUI-FOTO-VOLUNTARIOS.jpg',
      icono: 'fa-solid fa-hands-holding-circle',
      color: '#E85D8E',
      fondo: '#FFF0F6',
      detalle:
        'Los voluntarios aportan tiempo, capacidades e ideas y participan en las actividades de acuerdo con sus intereses y posibilidades.'
    },
    {
      numero: '03',
      nombre: 'Internos y pasantes',
      descripcion:
        'Participan aportando sus conocimientos y desarrollando experiencias dentro de la organización.',
      imagen: '/imagenes/AQUI-FOTO-INTERNOS.jpg',
      icono: 'fa-solid fa-graduation-cap',
      color: '#2878A5',
      fondo: '#EDF7FF',
      detalle:
        'Pueden poner en práctica sus conocimientos, colaborar en iniciativas y adquirir experiencia a través de su participación.'
    },
    {
      numero: '04',
      nombre: 'Residentes y comunidades',
      descripcion:
        'Las personas y comunidades forman parte importante de los procesos desarrollados en territorio.',
      imagen: '/imagenes/AQUI-FOTO-COMUNIDAD.jpg',
      icono: 'fa-solid fa-people-group',
      color: '#D99A00',
      fondo: '#FFF8DF',
      detalle:
        'La presencia en territorio permite conocer las realidades de las comunidades y desarrollar acciones junto con las personas.'
    }
  ];

  seleccionarIntegrante(index: number): void {
    this.integranteActivo =
      this.integranteActivo === index ? null : index;
  }

  get totalIntegrantes(): number {
    return this.integrantes.length;
  }
}
