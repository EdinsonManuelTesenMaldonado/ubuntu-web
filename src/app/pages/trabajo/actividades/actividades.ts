
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Actividad {
  numero: string;
  categoria: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
  orientacion: 'normal' | 'invertida';
}

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actividades.html',
  styleUrl: './actividades.css'
})
export class ActividadesComponent {
  actividades: Actividad[] = [
    {
      numero: '01',
      categoria: 'Solidaridad',
      titulo: 'Pequeñas acciones, grandes sonrisas',
      descripcion:
        'Cada jornada de voluntariado es una oportunidad para compartir, brindar apoyo y construir momentos significativos junto a las personas y comunidades.',
      imagen: '/imagenes/PSX_20241001_083915.jpg',
      imagenAlt: 'Experiencia de voluntariado y apoyo comunitario',
      orientacion: 'normal'
    },
    {
      numero: '02',
      categoria: 'Participación',
      titulo: 'Juntos hacemos la diferencia',
      descripcion:
        'El voluntariado se fortalece cuando las personas se unen, aportan sus ideas y trabajan en equipo para impulsar acciones solidarias.',
      imagen: '/imagenes/ss.png',
      imagenAlt: 'Participación de voluntarios en actividades',
      orientacion: 'invertida'
    },
    {
      numero: '03',
      categoria: 'Comunidad',
      titulo: 'Compartir también transforma',
      descripcion:
        'Las experiencias compartidas nos permiten aprender, crear vínculos y descubrir que cada persona puede contribuir al bienestar colectivo.',
      imagen: '/imagenes/WhatsApp Image 2026-06-26 at 11.46.38 AM.jpeg',
      imagenAlt: 'Experiencia de encuentro y participación comunitaria',
      orientacion: 'normal'
    }
  ];
}
