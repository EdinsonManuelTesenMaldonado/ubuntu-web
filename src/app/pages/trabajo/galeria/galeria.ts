
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FotoGaleria {
  numero: string;
  titulo: string;
  categoria: string;
  imagen: string;
  descripcion: string;
}

interface VideoGaleria {
  numero: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  url: string;
  miniatura: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class GaleriaComponent {
  tipoActivo: 'todos' | 'fotos' | 'videos' = 'todos';

  fotoSeleccionada: FotoGaleria | null = null;
  videoSeleccionado: VideoGaleria | null = null;

  // AGREGA NUEVAS FOTOGRAFÍAS AQUÍ
  // Guarda las imágenes en public/imagenes/
  fotos: FotoGaleria[] = [
    {
      numero: '01',
      titulo: 'Momentos que inspiran',
      categoria: 'Voluntariado',
      imagen: '/imagenes/PSX_20241001_083915.jpg',
      descripcion: 'Experiencias que dan sentido al voluntariado.'
    },
    {
      numero: '02',
      titulo: 'Compartir para crecer',
      categoria: 'Comunidad',
      imagen: '/imagenes/ss.png',
      descripcion: 'La colaboración nos acerca a los demás.'
    },
    {
      numero: '03',
      titulo: 'Experiencias Ubuntu',
      categoria: 'Experiencias',
      imagen: '/imagenes/WhatsApp Image 2026-06-26 at 11.46.38 AM.jpeg',
      descripcion: 'Aprendizajes y momentos compartidos.'
    }
  ];

  // AGREGA NUEVOS VIDEOS AQUÍ
  // Usa enlaces de YouTube. No necesitas guardar el video en Angular.
  videos: VideoGaleria[] = [
    {
      numero: 'V01',
      titulo: 'Conoce las experiencias de Ubuntu',
      categoria: 'Voluntariado',
      descripcion: 'Descubre el espíritu de la participación voluntaria.',
      url: 'https://www.youtube.com/watch?v=VIDEO_ID',
      miniatura: '/imagenes/PSX_20241001_083915.jpg'
    }
  ];

  get totalContenido(): number {
    return this.fotos.length + this.videos.length;
  }

  get fotosVisibles(): FotoGaleria[] {
    return this.tipoActivo === 'videos' ? [] : this.fotos;
  }

  get videosVisibles(): VideoGaleria[] {
    return this.tipoActivo === 'fotos' ? [] : this.videos;
  }

  cambiarTipo(tipo: 'todos' | 'fotos' | 'videos'): void {
    this.tipoActivo = tipo;
  }

  abrirFoto(foto: FotoGaleria): void {
    this.fotoSeleccionada = foto;
    this.videoSeleccionado = null;
  }

  abrirVideo(video: VideoGaleria): void {
    this.videoSeleccionado = video;
    this.fotoSeleccionada = null;
  }

  cerrarVisor(): void {
    this.fotoSeleccionada = null;
    this.videoSeleccionado = null;
  }

  obtenerUrlYoutube(url: string): string {
    let id = '';

    try {
      const direccion = new URL(url);

      if (direccion.hostname.includes('youtu.be')) {
        id = direccion.pathname.slice(1);
      } else if (direccion.hostname.includes('youtube.com')) {
        if (direccion.pathname === '/watch') {
          id = direccion.searchParams.get('v') ?? '';
        } else if (direccion.pathname.startsWith('/shorts/')) {
          id = direccion.pathname.split('/')[2] ?? '';
        } else if (direccion.pathname.startsWith('/embed/')) {
          id = direccion.pathname.split('/')[2] ?? '';
        }
      }
    } catch {
      return '';
    }

    if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) {
      return '';
    }

    return `https://www.youtube-nocookie.com/embed/${id}`;
  }
}
