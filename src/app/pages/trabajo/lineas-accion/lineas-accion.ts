
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

interface LineaAccion {
  id: string;
  numero: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  objetivo: string;
  icono: string;
  color: string;
  actividades: string[];
  imagen: string;
  video: string;
}

@Component({
  selector: 'app-lineas-accion',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './lineas-accion.html',
  styleUrl: './lineas-accion.css'
})
export class LineasAccion {
  lineas: LineaAccion[] = [
    {
      id: 'social',
      numero: '01',
      titulo: 'Social',
      categoria: 'SOLIDARIDAD Y COMUNIDAD',
      descripcion:
        'Promovemos iniciativas solidarias que buscan acompañar a las comunidades, fortalecer capacidades y generar oportunidades para quienes más lo necesitan.',
      objetivo:
        'Construir una sociedad más solidaria mediante la participación activa, el trabajo colaborativo y el compromiso de nuestros voluntarios.',
      icono: 'fa-solid fa-hands-holding-circle',
      color: 'social',
      actividades: [
        'Jornadas solidarias y apoyo comunitario',
        'Campañas de recolección y donación',
        'Acciones de acompañamiento social'
      ],
      imagen: '/imagenes/lineas-accion/social.jpg',
      video: '/videos/lineas-accion/social.mp4'
    },
    {
      id: 'ambiental',
      numero: '02',
      titulo: 'Ambiental',
      categoria: 'CUIDADO DEL PLANETA',
      descripcion:
        'Impulsamos acciones de sensibilización y participación ciudadana para fomentar el cuidado del ambiente y el uso responsable de nuestros recursos.',
      objetivo:
        'Promover hábitos sostenibles y una cultura de responsabilidad ambiental que contribuya al bienestar de nuestras comunidades.',
      icono: 'fa-solid fa-leaf',
      color: 'ambiental',
      actividades: [
        'Campañas de limpieza y cuidado de espacios',
        'Sensibilización sobre el medio ambiente',
        'Promoción de hábitos sostenibles'
      ],
      imagen: '/imagenes/lineas-accion/ambiental.jpg',
      video: '/videos/lineas-accion/ambiental.mp4'
    },
    {
      id: 'animalista',
      numero: '03',
      titulo: 'Animalista',
      categoria: 'RESPETO Y PROTECCIÓN ANIMAL',
      descripcion:
        'Apoyamos iniciativas orientadas al bienestar animal, la tenencia responsable y la sensibilización sobre el respeto hacia los animales.',
      objetivo:
        'Fomentar una comunidad comprometida con la protección animal y el trato responsable hacia los seres vivos.',
      icono: 'fa-solid fa-paw',
      color: 'animalista',
      actividades: [
        'Campañas de sensibilización y cuidado',
        'Apoyo a iniciativas de protección animal',
        'Promoción de la tenencia responsable'
      ],
      imagen: '/imagenes/lineas-accion/animalista.jpg',
      video: '/videos/lineas-accion/animalista.mp4'
    },
    {
      id: 'cultural',
      numero: '04',
      titulo: 'Cultural',
      categoria: 'ARTE, IDENTIDAD Y PARTICIPACIÓN',
      descripcion:
        'Creamos oportunidades para compartir conocimientos, desarrollar la creatividad y promover espacios de expresión, aprendizaje y encuentro.',
      objetivo:
        'Fortalecer la participación cultural y el intercambio de experiencias como herramientas para construir comunidad.',
      icono: 'fa-solid fa-palette',
      color: 'cultural',
      actividades: [
        'Talleres creativos y espacios de aprendizaje',
        'Actividades artísticas y culturales',
        'Encuentros de intercambio comunitario'
      ],
      imagen: '/imagenes/lineas-accion/cultural.jpg',
      video: '/videos/lineas-accion/cultural.mp4'
    }
  ];
}
