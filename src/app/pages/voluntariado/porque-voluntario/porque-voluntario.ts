
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-porque-ser-voluntario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './porque-voluntario.html',
styleUrl: './porque-voluntario.css'
})
export class PorqueSerVoluntarioComponent {
  razones = [
    {
      icono: 'fa-solid fa-heart',
      numero: '01',
      titulo: 'Genera un impacto positivo',
      descripcion: 'Participa en iniciativas que buscan contribuir al bienestar de las personas y las comunidades.'
    },
    {
      icono: 'fa-solid fa-people-group',
      numero: '02',
      titulo: 'Conecta con otras personas',
      descripcion: 'Conoce personas con intereses similares, comparte experiencias y aprende a trabajar en equipo.'
    },
    {
      icono: 'fa-solid fa-lightbulb',
      numero: '03',
      titulo: 'Desarrolla tus habilidades',
      descripcion: 'Fortalece tus capacidades personales y profesionales mediante nuevas experiencias.'
    },
    {
      icono: 'fa-solid fa-seedling',
      numero: '04',
      titulo: 'Crece mientras ayudas',
      descripcion: 'Descubre nuevas perspectivas y aprende mientras colaboras con otras personas.'
    }
  ];
}
