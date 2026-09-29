import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profesional',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profesional.html',
  styleUrl: './profesional.css'
})
export class Profesional {

  certificadoAbierto = '';

  abrirCertificado(tipo: string): void {

    const certificados: { [key: string]: string } = {

      participacion:
        '/imagenes/certificado-participacion.jpg',

      reconocimiento:
        '/imagenes/certificado-reconocimiento.jpg',

      constancia:
        '/imagenes/constancia-voluntariado.jpg',

      senaju:
        '/imagenes/certificacion-senaju.jpg'

    };

    this.certificadoAbierto = certificados[tipo] || '';

  }


  cerrarCertificado(): void {

    this.certificadoAbierto = '';

  }

}