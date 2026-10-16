
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './preguntas-frecuentes.html',
  styleUrl: './preguntas-frecuentes.css'
})
export class PreguntasFrecuentes {
  categoriaActiva = 'Todas';
  preguntaAbierta: number | null = 0;

  categorias = [
    'Todas',
    'Voluntariado',
    'Requisitos',
    'Registro',
    'Participación'
  ];

  preguntas = [
    {
      pregunta: '¿Qué es Ubuntu Jóvenes Voluntarios Perú?',
      respuesta: 'Es una iniciativa de voluntariado que busca promover la participación de jóvenes en actividades solidarias y proyectos de impacto social.',
      categoria: 'Voluntariado'
    },
    {
      pregunta: '¿Por qué debería participar como voluntario?',
      respuesta: 'Puedes contribuir con tu comunidad, compartir tus conocimientos, desarrollar habilidades y conocer personas que comparten tu interés por ayudar.',
      categoria: 'Voluntariado'
    },
    {
      pregunta: '¿Necesito tener experiencia previa?',
      respuesta: 'No necesariamente. La experiencia requerida puede depender de la actividad o del proyecto. Lo importante es tener disposición para aprender y colaborar.',
      categoria: 'Requisitos'
    },
    {
      pregunta: '¿Qué requisitos debo cumplir?',
      respuesta: 'Generalmente, se valora el compromiso, la responsabilidad, el respeto, el trabajo en equipo y la disponibilidad para participar. Los requisitos específicos deben confirmarse con la organización.',
      categoria: 'Requisitos'
    },
    {
      pregunta: '¿Cómo puedo inscribirme?',
      respuesta: 'Puedes comenzar completando el formulario de registro disponible en la página de voluntariado. Después, revisa los canales de contacto para consultar los siguientes pasos.',
      categoria: 'Registro'
    },
    {
      pregunta: '¿Qué información debo colocar en el formulario?',
      respuesta: 'Completa tus datos de contacto y la información solicitada sobre tu perfil, intereses y disponibilidad. Verifica que tu correo y teléfono sean correctos.',
      categoria: 'Registro'
    },
    {
      pregunta: '¿Cómo sabré si recibieron mi inscripción?',
      respuesta: 'Después de enviar el formulario, revisa el mensaje que aparezca en la página. Si tienes dudas sobre el estado de tu inscripción, comunícate con la organización.',
      categoria: 'Registro'
    },
    {
      pregunta: '¿Cuánto tiempo debo dedicar al voluntariado?',
      respuesta: 'La disponibilidad puede variar según la actividad y el proyecto. Antes de comprometerte, consulta el horario y la dedicación que se necesitan.',
      categoria: 'Participación'
    },
    {
      pregunta: '¿Puedo participar en actividades diferentes?',
      respuesta: 'Dependerá de las oportunidades disponibles, tu perfil y las necesidades de cada proyecto. Puedes consultar las actividades vigentes con la organización.',
      categoria: 'Participación'
    },
    {
      pregunta: '¿Puedo aportar mis conocimientos profesionales?',
      respuesta: 'Puedes comunicar tus conocimientos, estudios y habilidades en el formulario. La organización podrá evaluar si se ajustan a las necesidades de sus actividades.',
      categoria: 'Participación'
    },
    {
      pregunta: '¿Dónde se realizan las actividades?',
      respuesta: 'La ubicación depende de cada actividad o proyecto. Consulta previamente el lugar, la modalidad y las indicaciones correspondientes.',
      categoria: 'Participación'
    },
    {
      pregunta: '¿Con quién puedo comunicarme si tengo más dudas?',
      respuesta: 'Puedes visitar la sección Contacto de esta página para consultar los canales disponibles de comunicación.',
      categoria: 'Voluntariado'
    }
  ];

  get preguntasFiltradas() {
    return this.preguntas
      .map((pregunta, indice) => ({ ...pregunta, indice }))
      .filter(pregunta =>
        this.categoriaActiva === 'Todas' ||
        pregunta.categoria === this.categoriaActiva
      );
  }

  cambiarCategoria(categoria: string): void {
    this.categoriaActiva = categoria;
  }

  alternarPregunta(indice: number): void {
    this.preguntaAbierta =
      this.preguntaAbierta === indice ? null : indice;
  }
}
