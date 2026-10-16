
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Proyecto {
  numero: string;
  categoria: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
  etiqueta: string;
  destacado?: boolean;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {
  proyectos: Proyecto[] = [
    {
      numero: '01',
      categoria: 'SOLIDARIDAD Y COMUNIDAD',
      titulo: 'Campañas de ayuda social',
      descripcion:
        'Impulsamos iniciativas solidarias para acompañar a personas y familias, compartir recursos y construir oportunidades en comunidad.',
      imagen: '/imagenes/PSX_20241001_083915.jpg',
      imagenAlt: 'Actividad de voluntariado de Ubuntu',
      etiqueta: 'ACCIÓN SOCIAL',
      destacado: true
    },
    {
      numero: '02',
      categoria: 'EDUCACIÓN Y APRENDIZAJE',
      titulo: 'Oportunidades para aprender',
      descripcion:
        'Promovemos espacios de aprendizaje y participación donde los jóvenes pueden compartir sus conocimientos y desarrollar nuevas capacidades.',
      imagen: '/imagenes/ss.png',
      imagenAlt: 'Comunidad de voluntarios de Ubuntu',
      etiqueta: 'EDUCACIÓN'
    },
    {
      numero: '03',
      categoria: 'COMPROMISO AMBIENTAL',
      titulo: 'Cuidado de nuestro entorno',
      descripcion:
        'Fomentamos la conciencia ambiental y la participación ciudadana mediante iniciativas orientadas al cuidado de nuestro entorno.',
      imagen: '/imagenes/ambiental.png',
      imagenAlt: 'Actividades ambientales',
      etiqueta: 'AMBIENTE'
    },
    {
      numero: '04',
      categoria: 'PROTECCIÓN ANIMAL',
      titulo: 'Respeto y bienestar animal',
      descripcion:
        'Promovemos la sensibilización y las acciones solidarias que fomentan el respeto y la protección de los animales.',
      imagen: '/imagenes/animalista.png',
      imagenAlt: 'Actividades de protección animal',
      etiqueta: 'BIENESTAR ANIMAL'
    },
    {
      numero: '05',
      categoria: 'CULTURA Y PARTICIPACIÓN',
      titulo: 'Cultura que nos une',
      descripcion:
        'Creamos oportunidades para compartir experiencias, promover la creatividad y fortalecer los vínculos entre las personas.',
      imagen: '/imagenes/CULTURAL.jpeg',
      imagenAlt: 'Actividades culturales',
      etiqueta: 'CULTURA'
    },
    {
      numero: '06',
      categoria: 'COMUNIDAD UBUNTU',
      titulo: 'Personas que generan cambios',
      descripcion:
        'Cada iniciativa nace de personas que deciden aportar su tiempo, sus ideas y sus capacidades al servicio de los demás.',
      imagen: '/imagenes/WhatsApp Image 2026-06-26 at 11.46.38 AM.jpeg',
      imagenAlt: 'Experiencia de voluntariado Ubuntu',
      etiqueta: 'VOLUNTARIADO'
    }
  ];
}
