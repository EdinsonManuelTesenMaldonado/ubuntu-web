
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-actualidad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actualidad.html',
  styleUrl: './actualidad.css'
})
export class Actualidad {
  noticias = [
    {
      categoria: 'VOLUNTARIADO',
      fecha: 'Novedad',
      titulo: 'Súmate a nuestra comunidad de voluntarios',
      descripcion:
        'Conoce las oportunidades para compartir tu tiempo, tus habilidades y tus ganas de contribuir con la comunidad.',
      imagen: '/imagenes/PSX_20241001_083915.jpg',
      icono: 'fa-solid fa-hands-holding-circle',
      enlace: '/voluntariado/registro'
    },
    {
      categoria: 'ACTIVIDADES',
      fecha: 'Actividades',
      titulo: 'Participa en nuestras actividades solidarias',
      descripcion:
        'Descubre las diferentes formas de colaborar y formar parte de iniciativas que buscan generar un impacto positivo.',
      imagen: '/imagenes/PSX_20241001_083915.jpg',
      icono: 'fa-solid fa-people-group',
      enlace: '/trabajo/actividades'
    },
    {
      categoria: 'COMUNIDAD',
      fecha: 'Convocatorias',
      titulo: 'Tu talento también puede ayudar',
      descripcion:
        'Comparte tus conocimientos, habilidades e ideas para contribuir al desarrollo de nuevos proyectos sociales.',
      imagen: '/imagenes/PSX_20241001_083915.jpg',
      icono: 'fa-solid fa-heart',
      enlace: '/voluntariado/profesional'
    }
  ];
}
