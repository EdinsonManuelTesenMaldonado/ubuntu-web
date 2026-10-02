import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  pasoActual = 1;

  voluntario = {
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    edad: null as number | null,
    ciudad: '',
    perfil: '',
    interes: '',
    experiencia: '',
    disponibilidad: '',
    consentimiento: false
  };

  mensaje = '';
  error = '';
  enviando = false;

  private apiUrl = 'http://localhost:8080/api/voluntarios';


  // =========================
  // CAMBIAR DE PASO
  // =========================

  siguientePaso(): void {

    this.error = '';

    if (this.pasoActual === 1) {

      if (
        !this.voluntario.nombres ||
        !this.voluntario.apellidos ||
        !this.voluntario.correo ||
        !this.voluntario.telefono
      ) {
        this.error = 'Completa todos los campos obligatorios.';
        return;
      }

      if (!this.validarCorreo()) {
        this.error = 'Ingresa un correo electrónico válido.';
        return;
      }

      this.pasoActual = 2;
      return;
    }


    if (this.pasoActual === 2) {

      if (
        !this.voluntario.perfil ||
        !this.voluntario.interes
      ) {
        this.error = 'Completa los campos obligatorios.';
        return;
      }

      this.pasoActual = 3;
    }
  }


  pasoAnterior(): void {

    this.error = '';

    if (this.pasoActual > 1) {
      this.pasoActual--;
    }
  }


  irAPaso(paso: number): void {

    if (paso < this.pasoActual) {
      this.pasoActual = paso;
    }
  }


  // =========================
  // VALIDAR CORREO
  // =========================

  validarCorreo(): boolean {

    const patron =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return patron.test(this.voluntario.correo);
  }


  // =========================
  // ENVIAR REGISTRO
  // =========================

  async enviarRegistro(): Promise<void> {

    this.mensaje = '';
    this.error = '';

    if (!this.voluntario.consentimiento) {

      this.error =
        'Debes aceptar el consentimiento para continuar.';

      return;
    }

    this.enviando = true;

    try {

      const respuesta = await fetch(
        this.apiUrl,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.voluntario)
        }
      );


      const texto = await respuesta.text();

      console.log(
        'STATUS DEL SERVIDOR:',
        respuesta.status
      );

      console.log(
        'RESPUESTA:',
        texto
      );


      if (!respuesta.ok) {

        throw new Error(
          `El servidor respondió con código ${respuesta.status}`
        );

      }


      this.mensaje =
        '¡Registro enviado correctamente! Gracias por querer formar parte de Ubuntu.';


      this.voluntario = {

        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',
        edad: null,
        ciudad: '',
        perfil: '',
        interes: '',
        experiencia: '',
        disponibilidad: '',
        consentimiento: false

      };


      this.pasoActual = 1;


    } catch (error) {

      console.error(
        'ERROR AL ENVIAR REGISTRO:',
        error
      );

      this.error =
        'No se pudo enviar el registro. Verifica que el servidor esté funcionando.';

    } finally {

      this.enviando = false;

    }
  }
}