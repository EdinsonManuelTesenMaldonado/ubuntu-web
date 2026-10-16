
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trabajo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trabajo.html',
  styleUrl: './trabajo.css'
})
export class Trabajo {
  lineas = [
    {
      numero: '01',
      titulo: 'Líneas de acción',
      descripcion: 'Conoce las áreas en las que impulsamos iniciativas sociales, ambientales, culturales y de protección animal.',
      enlace: '/trabajo/lineas-accion',
      icono: 'fa-solid fa-hands-holding-circle'
    },
    {
      numero: '02',
      titulo: 'Proyectos',
      descripcion: 'Descubre las iniciativas que desarrollamos para generar oportunidades y contribuir al bienestar de las comunidades.',
      enlace: '/trabajo/proyectos',
      icono: 'fa-solid fa-lightbulb'
    },
    {
      numero: '03',
      titulo: 'Actividades',
      descripcion: 'Conoce las jornadas, campañas y experiencias que reúnen a nuestros voluntarios.',
      enlace: '/trabajo/actividades',
      icono: 'fa-solid fa-people-group'
    },
    {
      numero: '04',
      titulo: 'Nuestro impacto',
      descripcion: 'Conoce nuestra trayectoria y el compromiso de quienes trabajan por el cambio social.',
      enlace: '/trabajo/impacto',
      icono: 'fa-solid fa-chart-line'
    },
    {
      numero: '05',
      titulo: 'Galería',
      descripcion: 'Revive en imágenes las experiencias, actividades y momentos de nuestra comunidad voluntaria.',
      enlace: '/trabajo/galeria',
      icono: 'fa-solid fa-camera'
    }
  ];
}
