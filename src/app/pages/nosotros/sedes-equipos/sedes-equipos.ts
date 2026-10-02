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
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Piura.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 129,
      y: 151
    },

    {
      nombre: 'Lambayeque',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Lambayeque.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 150,
      y: 196
    },

    {
      nombre: 'Cajamarca',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Cajamarca.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 190,
      y: 217
    },

    {
      nombre: 'Trujillo',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Trujillo.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 192,
      y: 258
    },

    {
      nombre: 'Huánuco',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Huánuco.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 250,
      y: 286
    },

    {
      nombre: 'Lima Metropolitana',
      descripcion:
        'Conoce la presencia y las actividades de Ubuntu en Lima Metropolitana.',
      imagen: '/imagenes/limametropolitano.png',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 242,
      y: 361
    },

    {
      nombre: 'Callao',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Callao.',
      imagen: '/imagenes/callao.png',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 239,
      y: 385
    },

    {
      nombre: 'Manchay',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Manchay.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 260,
      y: 414
    },

    {
      nombre: 'Ica',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Ica.',
      imagen: '/imagenes/ica.png',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 291,
      y: 435
    },

    {
      nombre: 'Ayacucho',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Ayacucho.',
      imagen: '/imagenes/ayacucho.png',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 317,
      y: 475
    },

    {
      nombre: 'Junín',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Junín.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 387,
      y: 335
    },

    {
      nombre: 'Puno',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Puno.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 459,
      y: 453
    },

    {
      nombre: 'Cusco',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Cusco.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 419,
      y: 445
    },

    {
      nombre: 'Arequipa',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Arequipa.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 399,
      y: 506
    },

    {
      nombre: 'Tacna',
      descripcion:
        'Conoce las actividades y acciones desarrolladas por Ubuntu en Tacna.',
      imagen: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: 444,
      y: 558
    }

  ];


  get sedesFiltradas(): Sede[] {

    const texto = this.busqueda
      .trim()
      .toLowerCase();

    if (!texto) {
      return [];
    }

    return this.sedes.filter(sede =>
      sede.nombre.toLowerCase().includes(texto)
    );

  }


  seleccionarSede(sede: Sede): void {

    this.sedeSeleccionada = sede;

    setTimeout(() => {

      document
        .getElementById('informacion-sede')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

    }, 100);

  }


  limpiarBusqueda(): void {

    this.busqueda = '';

  }


  cerrarInformacion(): void {

    this.sedeSeleccionada = null;

  }

}