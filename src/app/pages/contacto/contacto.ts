
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  consulta = {
    nombres: '',
    correo: '',
    asunto: '',
    mensaje: '',
    aceptaContacto: false
  };

  enviado = false;
  error = '';

  enviarConsulta(): void {
    this.error = '';
    this.enviado = false;

    if (
      !this.consulta.nombres.trim() ||
      !this.consulta.correo.trim() ||
      !this.consulta.asunto.trim() ||
      !this.consulta.mensaje.trim()
    ) {
      this.error = 'Completa todos los campos antes de continuar.';
      return;
    }

    const correoValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.consulta.correo);

    if (!correoValido) {
      this.error = 'Ingresa un correo electrónico válido.';
      return;
    }

    if (!this.consulta.aceptaContacto) {
      this.error = 'Debes aceptar que se utilicen tus datos para responder a tu consulta.';
      return;
    }

    // Confirmación visual únicamente.
    // Para enviar la consulta realmente, se necesita un endpoint backend.
    this.enviado = true;

    this.consulta = {
      nombres: '',
      correo: '',
      asunto: '',
      mensaje: '',
      aceptaContacto: false
    };
  }
}
