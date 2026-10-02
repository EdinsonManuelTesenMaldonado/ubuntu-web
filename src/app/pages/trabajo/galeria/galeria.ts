import { Component } from '@angular/core';

interface Foto {
  id: number;
  categoria: string;
  imagen: string;
  titulo: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {

  filtroActual = 'TODAS';

  fotoSeleccionada: Foto | null = null;

  fotos: Foto[] = [
    {
      id: 1,
      categoria: 'SOCIAL',
      imagen: '/imagenes/AQUI-FOTO-GALERIA-1.jpg',
      titulo: 'Acción social'
    },
    {
      id: 2,
      categoria: 'SOCIAL',
      imagen: '/imagenes/AQUI-FOTO-GALERIA-2.jpg',
      titulo: 'Trabajo con la comunidad'
    },
    {
      id: 3,
      categoria: 'AMBIENTAL',
      imagen: '/imagenes/AQUI-FOTO-GALERIA-3.jpg',
      titulo: 'Acción ambiental'
    },
    {
      id: 4,
      categoria: 'AMBIENTAL',
      imagen: '/imagenes/AQUI-FOTO-GALERIA-4.jpg',
      titulo: 'Cuidado del ambiente'
    },
    {
      id: 5,
      categoria: 'ANIMALISTA',
      imagen: '/imagenes/AQUI-FOTO-GALERIA-5.jpg',
      titulo: 'Acción animalista'
    },
    {
      id: 6,
      categoria: 'ANIMALISTA',
      imagen: '/imagenes/AQUI-FOTO-GALERIA-6.jpg',
      titulo: 'Protección animal'
    },
    {
      id: 7,
      categoria: 'CULTURAL',
      imagen: '/imagenes/AQUI-FOTO-GALERIA-7.jpg',
      titulo: 'Actividad cultural'
    },
    {
      id: 8,
      categoria: 'CULTURAL',
      imagen: '/imagenes/AQUI-FOTO-GALERIA-8.jpg',
      titulo: 'Taller cultural'
    },
    {
      id: 9,
      categoria: 'SOCIAL',
      imagen: '/imagenes/AQUI-FOTO-GALERIA-9.jpg',
      titulo: 'Voluntariado Ubuntu'
    }
  ];

  get fotosFiltradas(): Foto[] {
    if (this.filtroActual === 'TODAS') {
      return this.fotos;
    }

    return this.fotos.filter(
      foto => foto.categoria === this.filtroActual
    );
  }

  cambiarFiltro(filtro: string): void {
    this.filtroActual = filtro;
  }

  abrirFoto(foto: Foto): void {
    this.fotoSeleccionada = foto;
  }

  cerrarFoto(): void {
    this.fotoSeleccionada = null;
  }

  fotoAnterior(): void {

    if (!this.fotoSeleccionada) {
      return;
    }

    const fotos = this.fotosFiltradas;

    const posicionActual = fotos.findIndex(
      foto => foto.id === this.fotoSeleccionada?.id
    );

    const nuevaPosicion =
      posicionActual === 0
        ? fotos.length - 1
        : posicionActual - 1;

    this.fotoSeleccionada = fotos[nuevaPosicion];
  }

  fotoSiguiente(): void {

    if (!this.fotoSeleccionada) {
      return;
    }

    const fotos = this.fotosFiltradas;

    const posicionActual = fotos.findIndex(
      foto => foto.id === this.fotoSeleccionada?.id
    );

    const nuevaPosicion =
      posicionActual === fotos.length - 1
        ? 0
        : posicionActual + 1;

    this.fotoSeleccionada = fotos[nuevaPosicion];
  }
}