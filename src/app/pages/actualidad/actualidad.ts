import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Noticia {
  id: number;
  categoria: string;
  titulo: string;
  descripcion: string;
  contenido: string;
  fecha: string;
  imagen: string;
}

@Component({
  selector: 'app-actualidad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actualidad.html',
  styleUrl: './actualidad.css'
})
export class Actualidad {

  filtroActual = 'TODAS';

  noticiaSeleccionada: Noticia | null = null;

  noticias: Noticia[] = [

    {
      id: 1,
      categoria: 'ACTIVIDADES',
      titulo: 'Actividades de Ubuntu',
      descripcion:
        'Conoce las actividades y acciones que realizamos junto a nuestra comunidad.',
      contenido:
        'En este espacio compartiremos información sobre las actividades desarrolladas por Ubuntu, incluyendo talleres, campañas, acciones comunitarias y otras iniciativas.',
      fecha: 'Próximamente',
      imagen: '/imagenes/AQUI-FOTO-NOVEDAD-1.jpg'
    },

    {
      id: 2,
      categoria: 'EVENTOS',
      titulo: 'Próximos eventos',
      descripcion:
        'Entérate de los próximos eventos y espacios de participación organizados por Ubuntu.',
      contenido:
        'Aquí podrás conocer los próximos eventos, encuentros y espacios de participación en los que podrás formar parte de las iniciativas de Ubuntu.',
      fecha: 'Próximamente',
      imagen: '/imagenes/AQUI-FOTO-NOVEDAD-2.jpg'
    },

    {
      id: 3,
      categoria: 'COMUNIDAD',
      titulo: 'Historias de nuestra comunidad',
      descripcion:
        'Conoce experiencias y momentos que forman parte del trabajo de Ubuntu.',
      contenido:
        'Compartiremos historias, experiencias y momentos relacionados con los voluntarios, estudiantes, profesionales y comunidades que forman parte de Ubuntu.',
      fecha: 'Próximamente',
      imagen: '/imagenes/AQUI-FOTO-NOVEDAD-3.jpg'
    }

  ];


  get noticiasFiltradas(): Noticia[] {

    if (this.filtroActual === 'TODAS') {
      return this.noticias;
    }

    return this.noticias.filter(
      noticia => noticia.categoria === this.filtroActual
    );

  }


  cambiarFiltro(filtro: string): void {

    this.filtroActual = filtro;

  }


  abrirNoticia(noticia: Noticia): void {

    this.noticiaSeleccionada = noticia;

  }


  cerrarNoticia(): void {

    this.noticiaSeleccionada = null;

  }

}