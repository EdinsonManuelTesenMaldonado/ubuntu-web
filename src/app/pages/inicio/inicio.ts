import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Testimonio {
  nombre: string;
  cargo: string;
  texto: string;
  iniciales: string;
}

interface RedSocial {
  nombre: string;
  icono: string;
  enlace: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  redesSociales: RedSocial[] = [
    {
      nombre: 'Facebook',
      icono: 'fa-brands fa-facebook-f',
      enlace: 'https://web.facebook.com/profile.php?id=61554147492454'
    },
    {
      nombre: 'LinkedIn',
      icono: 'fa-brands fa-linkedin-in',
      enlace: 'https://www.linkedin.com/in/ubuntujvperu/'
    },
    {
      nombre: 'Instagram',
      icono: 'fa-brands fa-instagram',
      enlace: 'https://www.instagram.com/ubuntujvperu/'
    },
    {
      nombre: 'TikTok',
      icono: 'fa-brands fa-tiktok',
      enlace: 'https://www.tiktok.com/@ubuntu_peru_oficial'
    }
  ];

  testimonios: Testimonio[] = [

    {
      nombre: 'Cielo Guevara',
      cargo: 'Voluntaria de Ubuntu SJM',
      iniciales: 'CG',
      texto:
        'Mi experiencia en la organización ha sido bastante enriquecedora. Hacer voluntariado para mí es un estilo de vida y me encanta lo que hago. Lo que ha cambiado en mí desde que estoy en la organización es mi manera de ver la realidad, salir de mi zona de confort y explorar el mundo de cada pequeño y su realidad.'
    },

    {
      nombre: 'Mireya Jhuliana Coquil',
      cargo: 'Practicante de Ubuntu',
      iniciales: 'MC',
      texto:
        'Con las distintas actividades que cada día realizamos, Ubuntu forma a futuro a una persona que se adapte a los cambios con facilidad. Algo que cambió en mí fue poder salir de mi zona de confort y atreverme más a buscar soluciones ante cualquier problemática.'
    },

    {
      nombre: 'Nicole Canales',
      cargo: 'Pasante de Ubuntu',
      iniciales: 'NI',
      texto:
        'Mi experiencia como pasante en la organización es agradable porque nos apoyamos entre todos y cada vez vamos aprendiendo cosas nuevas. Hacer voluntariado es bonito porque alegras muchos corazones y creas una familia tanto con los niños como con tu grupo de trabajo.'
    },

    {
      nombre: 'Bryan Raúl Vega Castillo',
      cargo: 'Practicante de Ingeniería de Sistemas',
      iniciales: 'BV',
      texto:
        'He empezado a hacer mis prácticas y hasta el día de hoy estoy conforme con lo que voy aprendiendo en esta nueva etapa. Espero seguir aprendiendo más y continuar creciendo durante esta experiencia.'
    }

  ];

}