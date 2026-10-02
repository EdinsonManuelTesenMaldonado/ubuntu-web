import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Sede {
  nombre: string;
  descripcion: string;
  imagen: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  x: number;
  y: number;
}

@Component({
  selector: 'app-sedes-equipos',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './sedes-equipos.html',
  styleUrl: './sedes-equipos.css'
})
export class SedesEquipos {

  busqueda = '';

  sedeSeleccionada: Sede | null = null;

  sedes: Sede[] = [

    {
      nombre: 'Piura',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Piura.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 9,
      y: 26
    },

    {
      nombre: 'Lambayeque',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Lambayeque.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 13,
      y: 32
    },

    {
      nombre: 'Cajamarca',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Cajamarca.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 17,
      y: 38
    },

    {
      nombre: 'Trujillo',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Trujillo.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 18,
      y: 44
    },

    {
      nombre: 'Huánuco',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Huánuco.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 25,
      y: 51
    },

    {
      nombre: 'Lima Metropolitana',
      descripcion: 'Conoce la presencia y las actividades de Ubuntu en Lima Metropolitana.',
      imagen: '/imagenes/limametropolitano.png',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 29,
      y: 58
    },

    {
      nombre: 'Callao',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Callao.',
      imagen: '/imagenes/callao.png',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 25,
      y: 63
    },

    {
      nombre: 'Manchay',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Manchay.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 28,
      y: 69
    },

    {
      nombre: 'Ica',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Ica.',
      imagen: '/imagenes/ica.png',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 34,
      y: 75
    },

    {
      nombre: 'Ayacucho',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Ayacucho.',
      imagen: '/imagenes/ayacucho.png',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 40,
      y: 84
    },

    {
      nombre: 'Junín',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Junín.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 72,
      y: 45
    },

    {
      nombre: 'Puno',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Puno.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 88,
      y: 84
    },

    {
      nombre: 'Cusco',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Cusco.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 77,
      y: 88
    },

    {
      nombre: 'Arequipa',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Arequipa.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 64,
      y: 92
    },

    {
      nombre: 'Tacna',
      descripcion: 'Conoce las actividades y acciones de Ubuntu en Tacna.',
      imagen: '',
      facebook: '#',
      instagram: '#',
      tiktok: '#',
      x: 75,
      y: 97
    }

  ];


  get sedesFiltradas(): Sede[] {

    const texto = this.busqueda
      .trim()
      .toLowerCase();

    if (!texto) {
      return this.sedes;
    }

    return this.sedes.filter(
      sede =>
        sede.nombre
          .toLowerCase()
          .includes(texto)
    );
  }


  seleccionarSede(sede: Sede): void {

    this.sedeSeleccionada = sede;

  }


  buscarSede(): void {

    const resultados = this.sedesFiltradas;

    if (resultados.length === 1) {

      this.seleccionarSede(resultados[0]);

      setTimeout(() => {

        document
          .getElementById('informacion-sede')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

      }, 100);

    }

  }


  limpiarBusqueda(): void {

    this.busqueda = '';

    this.sedeSeleccionada = null;

  }


  cerrarInformacion(): void {

    this.sedeSeleccionada = null;

  }

}