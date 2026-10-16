import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface RedSocial {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
}

interface Sede {
  id: string;
  nombre: string;
  descripcion: string;
  foto: string;
  redes: RedSocial;
}

@Component({
  selector: 'app-sedes-equipos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sedes-equipos.html',
  styleUrl: './sedes-equipos.css'
})
export class SedesEquipos {

  busqueda = '';
  sedeActiva = '';

  // =========================================================
  // SEDES PROVINCIALES Y PRESENCIA NACIONAL
  // =========================================================

  sedes: Sede[] = [
    {
      id: 'piura',
      nombre: 'Piura',
      descripcion:
        'Sede de Ubuntu Jóvenes Voluntarios Perú que forma parte de la presencia de la organización fuera de Lima.',
      foto: '/imagenes/PORTADA.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=61589065370399&locale=es_LA',
        instagram:
          'https://www.instagram.com/ubuntupiura/',
        tiktok:
          'https://www.tiktok.com/@ubuntu.piura'
      }
    },

    {
      id: 'lambayeque',
      nombre: 'Lambayeque',
      descripcion:
        'Sede de Ubuntu presente en Lambayeque, integrada a la comunidad de jóvenes voluntarios de la organización.',
      foto: '/imagenes/voluntarios.png',
      redes: {
        instagram:
          'https://www.instagram.com/ubuntu.lambayeque/',
        tiktok:
          'https://www.tiktok.com/@ubuntu_lambayeque'
      }
    },

    {
      id: 'cajamarca',
      nombre: 'Cajamarca',
      descripcion:
        'Sede de Ubuntu en Cajamarca, parte de la presencia regional de la organización.',
      foto: '/imagenes/PSX_20241001_083825.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=61557901973527',
        instagram:
          'https://www.instagram.com/ubuntucajamarca/'
      }
    },

    {
      id: 'trujillo',
      nombre: 'Trujillo',
      descripcion:
        'Sede de Ubuntu en Trujillo, donde jóvenes voluntarios forman parte de las iniciativas de la organización.',
      foto: '/imagenes/IMG_20211017_092641_907.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=61564050323871',
        instagram:
          'https://www.instagram.com/ubuntu.trujillo/',
        tiktok:
          'https://www.tiktok.com/@ubuntu_trujillo_'
      }
    },

    {
      id: 'huanuco',
      nombre: 'Huánuco',
      descripcion:
        'Sede regional de Ubuntu que forma parte de la presencia de la organización en el territorio peruano.',
      foto: '/imagenes/image.png',
      redes: {
        instagram:
          'https://www.instagram.com/ubuntuhuanuco/',
        tiktok:
          'https://www.tiktok.com/@ubuntu_huanuco'
      }
    },

    {
      id: 'callao',
      nombre: 'Callao',
      descripcion:
        'Presencia de Ubuntu en la Provincia Constitucional del Callao.',
      foto: '/imagenes/voluntarios.png',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=100090891469866',
        instagram:
          'https://www.instagram.com/ubuntu.callao/'
      }
    },

    {
      id: 'manchay',
      nombre: 'Manchay',
      descripcion:
        'Presencia de Ubuntu en Manchay, vinculada al trabajo territorial de la organización.',
      foto: '/imagenes/PORTADA.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=61574230079020',
        instagram:
          'https://www.instagram.com/ubuntu.manchay/'
      }
    },

    {
      id: 'ica',
      nombre: 'Ica',
      descripcion:
        'Sede de Ubuntu en Ica, parte de la presencia nacional de jóvenes voluntarios.',
      foto: '/imagenes/voluntarios.png',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=100092400888446',
        instagram:
          'https://www.instagram.com/ubuntu.ica/',
        tiktok:
          'https://www.tiktok.com/@ubuntu.ica'
      }
    },

    {
      id: 'ayacucho',
      nombre: 'Ayacucho',
      descripcion:
        'Sede de Ubuntu en Ayacucho, donde se desarrollan iniciativas vinculadas al voluntariado.',
      foto: '/imagenes/PSX_20241001_083825.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/UbuntuJVAyacucho',
        instagram:
          'https://www.instagram.com/ubuntuayacucho/',
        tiktok:
          'https://www.tiktok.com/@ubuntu.ayacucho'
      }
    },

    {
      id: 'junin',
      nombre: 'Junín',
      descripcion:
        'Sede de Ubuntu en Junín, integrante de la presencia regional de la organización.',
      foto: '/imagenes/IMG_20211017_092641_907.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/Ubuntujunin',
        instagram:
          'https://www.instagram.com/ubuntu.junin/',
        tiktok:
          'https://www.tiktok.com/@ubuntu.junin'
      }
    },

    {
      id: 'cusco',
      nombre: 'Cusco',
      descripcion:
        'Sede de Ubuntu en Cusco, parte de la presencia de la organización a nivel nacional.',
      foto: '/imagenes/image.png',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=100086323617903',
        instagram:
          'https://www.instagram.com/ubunt_ucusco/',
        tiktok:
          'https://www.tiktok.com/@ubuntu_cusco'
      }
    },

    {
      id: 'puno',
      nombre: 'Puno',
      descripcion:
        'Sede de Ubuntu en Puno, integrada por jóvenes voluntarios comprometidos con las iniciativas de la organización.',
      foto: '/imagenes/voluntarios.png',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=100081196068654',
        instagram:
          'https://www.instagram.com/ubuntu_puno/',
        tiktok:
          'https://www.tiktok.com/@ubuntu_puno'
      }
    },

    {
      id: 'arequipa',
      nombre: 'Arequipa',
      descripcion:
        'Sede de Ubuntu en Arequipa, parte de la expansión territorial de la organización.',
      foto: '/imagenes/PORTADA.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/ubuntuarequipa',
        instagram:
          'https://www.instagram.com/ubuntuarequipa/',
        tiktok:
          'https://www.tiktok.com/@ubuntu.arequipa'
      }
    },

    {
      id: 'tacna',
      nombre: 'Tacna',
      descripcion:
        'Sede de Ubuntu en Tacna, parte de la presencia nacional de la organización.',
      foto: '/imagenes/PSX_20241001_083825.jpg',
      redes: {
        instagram:
          'https://www.instagram.com/ubuntu_tacna/',
        tiktok:
          'https://www.tiktok.com/@ubuntutacna'
      }
    }
  ];

  // =========================================================
  // 11 SEDES DE LIMA METROPOLITANA
  // =========================================================

  sedesLima: Sede[] = [
    {
      id: 'chorrillos',
      nombre: 'Chorrillos',
      descripcion:
        'Sede de Ubuntu ubicada en Chorrillos, parte de la presencia de la organización en Lima Metropolitana.',
      foto: '/imagenes/PORTADA.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/ubuntu.chorrillos',
        instagram:
          'https://www.instagram.com/ubuntu_chorrillos/',
        tiktok:
          'https://www.tiktok.com/@chorrillos_1'
      }
    },

    {
      id: 'san-juan-de-miraflores',
      nombre: 'San Juan de Miraflores',
      descripcion:
        'Sede de Ubuntu en San Juan de Miraflores, integrante de las sedes de Lima Metropolitana.',
      foto: '/imagenes/voluntarios.png',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=100091898588499',
        instagram:
          'https://www.instagram.com/ubuntujv_sjm/'
      }
    },

    {
      id: 'villa-maria-del-triunfo',
      nombre: 'Villa María del Triunfo',
      descripcion:
        'Sede de Ubuntu en Villa María del Triunfo, parte de la presencia territorial de la organización en Lima.',
      foto: '/imagenes/PSX_20241001_083825.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/UBUNTUJVPERUVMT',
        instagram:
          'https://www.instagram.com/ubuntu.vmt/'
      }
    },

    {
      id: 'villa-el-salvador',
      nombre: 'Villa El Salvador',
      descripcion:
        'Sede de Ubuntu en Villa El Salvador, integrante de las sedes de Lima Metropolitana.',
      foto: '/imagenes/IMG_20211017_092641_907.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=100089871905260&__cft__[0]=AZgdAEKi66nAkqavrGCHM0NQP36BjAns8ejREia4sjaC82SmUVZ5oImIG3E_-cY3IytMivRqywag7N-qZXt9pGdJEh8txnCOrOBe2TY9WUtIzvfqz4ZaOvJwJhiLfAr1opfSMY885QKN_RjWTU98eocVMh57BSg5fVHazBFtKcLVeJ-RHL-OapK9qRE&__tn__=-UC%2CP-R',
        instagram:
          'https://www.instagram.com/ubuntuvillaelsalvador/'
      }
    },

    {
      id: 'comas',
      nombre: 'Comas',
      descripcion:
        'Sede de Ubuntu en Comas, parte de la presencia de la organización en Lima Metropolitana.',
      foto: '/imagenes/image.png',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=61557955461199',
        instagram:
          'https://www.instagram.com/ubuntu.comas/',
        tiktok:
          'https://www.tiktok.com/@ubuntu.comas7'
      }
    },

    {
      id: 'puente-piedra',
      nombre: 'Puente Piedra',
      descripcion:
        'Sede de Ubuntu en Puente Piedra, integrante de la presencia territorial en Lima.',
      foto: '/imagenes/voluntarios.png',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=100091869657977',
        instagram:
          'https://www.instagram.com/ubuntu.puentepiedra/',
        tiktok:
          'https://www.tiktok.com/@ubuntu_puentepiedra'
      }
    },

    {
      id: 'san-juan-de-lurigancho',
      nombre: 'San Juan de Lurigancho',
      descripcion:
        'Sede de Ubuntu en San Juan de Lurigancho, uno de los distritos donde la organización tiene presencia en Lima Metropolitana.',
      foto: '/imagenes/PORTADA.jpg',
      redes: {
        instagram:
          'https://www.instagram.com/ubuntu_sjl/'
      }
    },

    {
      id: 'chosica',
      nombre: 'Chosica',
      descripcion:
        'Sede de Ubuntu ubicada en Chosica, parte de las 11 sedes de Lima Metropolitana identificadas en el material institucional.',
      foto: '/imagenes/PSX_20241001_083825.jpg',
      redes: {}
    },

    {
      id: 'huaycan',
      nombre: 'Huaycán',
      descripcion:
        'Sede de Ubuntu en Huaycán, parte de la presencia territorial de la organización en Lima Metropolitana.',
      foto: '/imagenes/IMG_20211017_092641_907.jpg',
      redes: {
        facebook:
          'https://www.facebook.com/ubuntujvhuaycan',
        instagram:
          'https://www.instagram.com/ubuntu_huaycan/',
        tiktok:
          'https://www.tiktok.com/@ubuntu.huaycn'
      }
    },

    {
      id: 'huachipa',
      nombre: 'Huachipa',
      descripcion:
        'Sede de Ubuntu en Huachipa, integrante de las sedes de Lima Metropolitana.',
      foto: '/imagenes/image.png',
      redes: {
        facebook:
          'https://www.facebook.com/UbuntuJVHuachipa',
        instagram:
          'https://www.instagram.com/ubuntu.huachipa/',
        tiktok:
          'https://www.tiktok.com/@ubuntu.huachipa5'
      }
    },

    {
      id: 'independencia',
      nombre: 'Independencia',
      descripcion:
        'Sede de Ubuntu en Independencia, parte de la presencia de la organización en Lima Metropolitana.',
      foto: '/imagenes/voluntarios.png',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=61579633324326',
        instagram:
          'https://www.instagram.com/ubuntu.independencia/',
        tiktok:
          'https://www.tiktok.com/@ubuntuindependenci'
      }
    }
  ];

  // =========================================================
  // ORGANIZACIONES JUVENILES UNIVERSITARIAS
  // =========================================================

  universidades: Sede[] = [
    {
      id: 'unmsm',
      nombre: 'Ubuntu UNMSM',
      descripcion:
        'Organización juvenil universitaria vinculada a Ubuntu en la Universidad Nacional Mayor de San Marcos.',
      foto: '/imagenes/voluntarios.png',
      redes: {
        facebook:
          'https://www.facebook.com/profile.php?id=100093747610849',
        instagram:
          'https://www.instagram.com/ubuntusanmarcos/'
      }
    },

    {
      id: 'pucp',
      nombre: 'Ubuntu PUCP',
      descripcion:
        'Organización juvenil universitaria vinculada a Ubuntu en la Pontificia Universidad Católica del Perú.',
      foto: '/imagenes/IMG_20211017_092641_907.jpg',
      redes: {
        instagram:
          'https://www.instagram.com/ubuntupucp/',
        tiktok:
          'https://www.tiktok.com/@ubuntu.pucp'
      }
    },

    {
      id: 'unac',
      nombre: 'Ubuntu UNAC',
      descripcion:
        'Organización juvenil universitaria vinculada a Ubuntu en la Universidad Nacional del Callao.',
      foto: '/imagenes/PSX_20241001_083825.jpg',
      redes: {
        instagram:
          'https://www.instagram.com/ubuntu.unac/'
      }
    },

    {
      id: 'upn',
      nombre: 'Ubuntu UPN',
      descripcion:
        'Organización juvenil universitaria vinculada a Ubuntu en la Universidad Privada del Norte.',
      foto: '/imagenes/image.png',
      redes: {
        instagram:
          'https://www.instagram.com/ubuntu_upn/'
      }
    }
  ];

  // =========================================================
  // COORDENADAS DEL MAPA
  // =========================================================

  puntosMapa = [
    { id: 'piura', nombre: 'Piura', x: 18.60, y: 23.77 },
    { id: 'lambayeque', nombre: 'Lambayeque', x: 22.90, y: 32.29 },
    { id: 'cajamarca', nombre: 'Cajamarca', x: 30.18, y: 34.51 },
    { id: 'trujillo', nombre: 'Trujillo', x: 27.84, y: 40.00 },
    { id: 'huanuco', nombre: 'Huánuco', x: 40.20, y: 45.60 },
    { id: 'lima', nombre: 'Lima Metropolitana', x: 37.54, y: 56.29 },
    { id: 'callao', nombre: 'Callao', x: 36.02, y: 61.94 },
    { id: 'manchay', nombre: 'Manchay', x: 39.40, y: 65.17 },
    { id: 'ica', nombre: 'Ica', x: 44.61, y: 75.71 },
    { id: 'ayacucho', nombre: 'Ayacucho', x: 52.80, y: 74.91 },
    { id: 'junin', nombre: 'Junín', x: 46.63, y: 59.17 },
    { id: 'cusco', nombre: 'Cusco', x: 65.30, y: 71.89 },
    { id: 'puno', nombre: 'Puno', x: 72.03, y: 81.14 },
    { id: 'arequipa', nombre: 'Arequipa', x: 61.74, y: 81.37 },
    { id: 'tacna', nombre: 'Tacna', x: 67.28, y: 89.14 }
  ];

  // =========================================================
  // BÚSQUEDA
  // =========================================================

  get sedesFiltradas(): Sede[] {
    const texto = this.normalizar(this.busqueda);

    if (!texto) {
      return this.sedes;
    }

    return this.sedes.filter(sede =>
      this.normalizar(sede.nombre).includes(texto)
    );
  }

  get sedesLimaFiltradas(): Sede[] {
    const texto = this.normalizar(this.busqueda);

    if (!texto) {
      return this.sedesLima;
    }

    return this.sedesLima.filter(sede =>
      this.normalizar(sede.nombre).includes(texto)
    );
  }

  get universidadesFiltradas(): Sede[] {
    const texto = this.normalizar(this.busqueda);

    if (!texto) {
      return this.universidades;
    }

    return this.universidades.filter(universidad =>
      this.normalizar(universidad.nombre).includes(texto)
    );
  }

  private normalizar(texto: string): string {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  seleccionarSede(id: string): void {
    this.sedeActiva = id;

    setTimeout(() => {
      document.getElementById('informacion-sede')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  seleccionarDesdeBusqueda(sede: Sede): void {
    this.sedeActiva = sede.id;

    setTimeout(() => {
      document.getElementById('informacion-sede')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  seleccionarLima(): void {
    this.sedeActiva = 'lima';

    setTimeout(() => {
      document.getElementById('lima-metropolitana')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  limpiarBusqueda(): void {
    this.busqueda = '';
  }

  cerrarInformacion(): void {
    this.sedeActiva = '';
  }

  obtenerSedeActiva(): Sede | undefined {
    return this.sedes.find(sede => sede.id === this.sedeActiva);
  }
}