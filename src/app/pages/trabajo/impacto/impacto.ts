
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface EjeImpacto {
  numero: string;
  icono: string;
  titulo: string;
  descripcion: string;
  detalle: string;
}

@Component({
  selector: 'app-impacto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './impacto.html',
  styleUrl: './impacto.css'
})
export class ImpactoComponent {
  ejes: EjeImpacto[] = [
    {
      numero: '01',
      icono: 'fa-solid fa-hand-holding-heart',
      titulo: 'Solidaridad activa',
      descripcion:
        'Promovemos acciones que ponen a las personas en el centro y buscan responder a las necesidades de la comunidad.',
      detalle: 'Escuchar, acompañar y ayudar.'
    },
    {
      numero: '02',
      icono: 'fa-solid fa-people-group',
      titulo: 'Participación juvenil',
      descripcion:
        'Impulsamos la participación de jóvenes que desean compartir sus capacidades y contribuir al bienestar colectivo.',
      detalle: 'Jóvenes que se comprometen.'
    },
    {
      numero: '03',
      icono: 'fa-solid fa-seedling',
      titulo: 'Compromiso con la comunidad',
      descripcion:
        'Fomentamos una cultura de colaboración, respeto y responsabilidad para construir comunidades más solidarias.',
      detalle: 'Acciones que inspiran cambios.'
    },
    {
      numero: '04',
      icono: 'fa-solid fa-lightbulb',
      titulo: 'Aprendizaje compartido',
      descripcion:
        'Cada experiencia de voluntariado es una oportunidad para aprender, desarrollar habilidades y crecer junto a otras personas.',
      detalle: 'Crecer mientras ayudamos.'
    }
  ];

  pasos = [
    {
      numero: '01',
      titulo: 'Identificamos necesidades',
      descripcion:
        'Escuchamos y reconocemos las necesidades de las personas y comunidades con las que buscamos colaborar.'
    },
    {
      numero: '02',
      titulo: 'Nos organizamos',
      descripcion:
        'Sumamos ideas, capacidades y voluntades para preparar acciones solidarias con sentido.'
    },
    {
      numero: '03',
      titulo: 'Actuamos en equipo',
      descripcion:
        'Participamos de manera responsable, colaborando y aprendiendo durante cada experiencia.'
    },
    {
      numero: '04',
      titulo: 'Aprendemos y mejoramos',
      descripcion:
        'Reflexionamos sobre lo vivido para reconocer oportunidades de mejora y fortalecer futuras acciones.'
    }
  ];
}
