
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ModalidadVoluntariado {
  numero: string;
  icono: string;
  titulo: string;
  descripcion: string;
  etiqueta: string;
}

@Component({
  selector: 'app-voluntariado',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './voluntariado.html',
  styleUrl: './voluntariado.css'
})
export class VoluntariadoComponent {
  modalidades: ModalidadVoluntariado[] = [
    {
      numero: '01',
      icono: 'fa-solid fa-people-group',
      titulo: 'Voluntariado comunitario',
      descripcion:
        'Participa en experiencias de colaboración, apoyo y compromiso con las personas y comunidades.',
      etiqueta: 'Participación'
    },
    {
      numero: '02',
      icono: 'fa-solid fa-laptop',
      titulo: 'Voluntariado especializado',
      descripcion:
        'Pon tus conocimientos, habilidades y experiencia al servicio de iniciativas que necesitan tu aporte.',
      etiqueta: 'Conocimientos'
    },
    {
      numero: '03',
      icono: 'fa-solid fa-lightbulb',
      titulo: 'Voluntariado creativo',
      descripcion:
        'Comparte ideas, propuestas y talentos que puedan contribuir al desarrollo de nuevas actividades.',
      etiqueta: 'Creatividad'
    }
  ];

  pasos = [
    {
      numero: '01',
      titulo: 'Regístrate',
      descripcion:
        'Completa el formulario con tus datos y cuéntanos un poco sobre ti.'
    },
    {
      numero: '02',
      titulo: 'Comparte tus intereses',
      descripcion:
        'Indica tus habilidades, motivaciones y la manera en que te gustaría participar.'
    },
    {
      numero: '03',
      titulo: 'Conoce las oportunidades',
      descripcion:
        'El equipo podrá revisar tu información y orientarte sobre las oportunidades disponibles.'
    },
    {
      numero: '04',
      titulo: 'Empieza a participar',
      descripcion:
        'Conoce las indicaciones de participación y prepárate para aportar a las iniciativas de Ubuntu.'
    }
  ];
}
