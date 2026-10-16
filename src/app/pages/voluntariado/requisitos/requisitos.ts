
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-requisitos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './requisitos.html',
  styleUrl: './requisitos.css'
})
export class RequisitosComponent {

  requisitos = [
    {
      numero: '01',
      icono: 'fa-solid fa-heart',
      titulo: 'Motivación para ayudar',
      descripcion: 'Tener interés en colaborar con iniciativas sociales y contribuir positivamente a la comunidad.'
    },
    {
      numero: '02',
      icono: 'fa-solid fa-handshake',
      titulo: 'Compromiso y responsabilidad',
      descripcion: 'Participar con responsabilidad en las actividades acordadas y comunicar cualquier dificultad.'
    },
    {
      numero: '03',
      icono: 'fa-solid fa-people-group',
      titulo: 'Trabajo en equipo',
      descripcion: 'Mantener una actitud respetuosa, colaborativa y abierta a compartir experiencias con otras personas.'
    },
    {
      numero: '04',
      icono: 'fa-solid fa-clock',
      titulo: 'Disponibilidad de tiempo',
      descripcion: 'Indicar tus horarios disponibles para identificar oportunidades que puedan adaptarse a ellos.'
    },
    {
      numero: '05',
      icono: 'fa-solid fa-comments',
      titulo: 'Comunicación y respeto',
      descripcion: 'Escuchar, comunicarte de manera respetuosa y contribuir a un ambiente de colaboración.'
    },
    {
      numero: '06',
      icono: 'fa-solid fa-graduation-cap',
      titulo: 'Ganas de aprender',
      descripcion: 'Estar dispuesto a aprender, recibir orientación y desarrollar nuevas habilidades durante la experiencia.'
    }
  ];

  recomendaciones: string[] = [
    'Piensa qué te motiva a participar.',
    'Identifica tus intereses y habilidades.',
    'Revisa cuánto tiempo puedes dedicar.',
    'Completa el formulario con información verdadera.',
    'Consulta con Ubuntu las condiciones de participación antes de comenzar.'
  ];
}
