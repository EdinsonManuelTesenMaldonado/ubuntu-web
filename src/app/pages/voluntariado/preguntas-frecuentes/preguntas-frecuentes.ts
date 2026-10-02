import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Pregunta {
  pregunta: string;
  respuesta: string;
}

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './preguntas-frecuentes.html',
  styleUrl: './preguntas-frecuentes.css'
})
export class PreguntasFrecuentes {

  preguntaAbierta: number | null = null;

  preguntas: Pregunta[] = [

    {
      pregunta: '¿Qué requisitos necesito para ser voluntario?',
      respuesta:
        'El principal requisito es contar con el espíritu de cambio y el deseo de ayudar. Ubuntu está dirigido a jóvenes, estudiantes, internos, pasantes y profesionales que quieran contribuir con sus conocimientos, talentos y capacidades.'
    },

    {
      pregunta: '¿Quiénes pueden participar en Ubuntu?',
      respuesta:
        'El programa de voluntariado está abierto a jóvenes, estudiantes, internos, pasantes y profesionales interesados en participar en las iniciativas de Ubuntu.'
    },

    {
      pregunta: '¿Puedo participar si soy estudiante?',
      respuesta:
        'Sí. Los estudiantes forman parte de los perfiles que pueden participar en el programa de voluntariado y contribuir en las diferentes iniciativas de Ubuntu.'
    },

    {
      pregunta: '¿Pueden participar profesionales?',
      respuesta:
        'Sí. Los profesionales pueden aportar sus conocimientos, experiencia y capacidades de acuerdo con las iniciativas y actividades en las que participen.'
    },

    {
      pregunta: '¿En qué actividades puedo participar?',
      respuesta:
        'Ubuntu desarrolla iniciativas en cuatro líneas de acción: social, ambiental, animalista y cultural. La participación puede darse en diferentes actividades y proyectos relacionados con estas líneas.'
    },

    {
      pregunta: '¿Necesito tener experiencia como voluntario?',
      respuesta:
        'No se establece como requisito principal contar con experiencia previa. Ubuntu destaca el espíritu de cambio, el deseo de ayudar y la disposición para contribuir con el propio talento y capacidades.'
    },

    {
      pregunta: '¿Recibo algún certificado por mi participación?',
      respuesta:
        'La participación puede ser reconocida mediante certificados y constancias, según corresponda y de acuerdo con las condiciones del programa. El material institucional también menciona certificaciones acreditadas por SENAJU según corresponda.'
    },

    {
      pregunta: '¿Cómo puedo registrarme como voluntario?',
      respuesta:
        'Puedes ingresar al formulario de registro de voluntariado de Ubuntu, completar tus datos y enviar tu solicitud para expresar tu interés en participar.'
    }

  ];


  togglePregunta(index: number): void {

    if (this.preguntaAbierta === index) {

      this.preguntaAbierta = null;

    } else {

      this.preguntaAbierta = index;

    }

  }

}