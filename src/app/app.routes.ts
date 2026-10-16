
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio)
  },
  {
    path: 'actualidad',
    loadComponent: () =>
      import('./pages/actualidad/actualidad').then(m => m.Actualidad)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto').then(m => m.Contacto)
  },

  // NOSOTROS
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/nosotros/nosotros').then(m => m.Nosotros)
  },
  {
    path: 'nosotros/historia',
    loadComponent: () =>
      import('./pages/nosotros/historia/historia')
        .then(m => m.Historia)
  },
  {
    path: 'nosotros/mision-vision',
    loadComponent: () =>
      import('./pages/nosotros/mision-vision/mision-vision')
        .then(m => m.MisionVision)
  },
  {
    path: 'nosotros/valores',
    loadComponent: () =>
      import('./pages/nosotros/valores/valores')
        .then(m => m.Valores)
  },
  {
    path: 'nosotros/equipo',
    loadComponent: () =>
      import('./pages/nosotros/equipo/equipo')
        .then(m => m.Equipo)
  },
  {
    path: 'nosotros/sedes-equipos',
    loadComponent: () =>
      import('./pages/nosotros/sedes-equipos/sedes-equipos')
        .then(m => m.SedesEquipos)
  },

  // TRABAJO Y ACTIVIDADES
  {
    path: 'trabajo',
    loadComponent: () =>
      import('./pages/trabajo/trabajo').then(m => m.Trabajo)
  },
  {
    path: 'trabajo/proyectos',
    loadComponent: () =>
      import('./pages/trabajo/proyectos/proyectos')
        .then(m => m.Proyectos)
  },
  {
    path: 'trabajo/actividades',
    loadComponent: () =>
      import('./pages/trabajo/actividades/actividades')
        .then(m => m.ActividadesComponent)
  },
  {
    path: 'trabajo/impacto',
    loadComponent: () =>
      import('./pages/trabajo/impacto/impacto')
        .then(m => m.ImpactoComponent)
  },
  {
    path: 'trabajo/galeria',
    loadComponent: () =>
      import('./pages/trabajo/galeria/galeria')
        .then(m => m.GaleriaComponent)
  },
  {
    path: 'trabajo/lineas-accion',
    loadComponent: () =>
      import('./pages/trabajo/lineas-accion/lineas-accion')
        .then(m => m.LineasAccion)
  },

  // VOLUNTARIADO
  {
    path: 'voluntariado',
    loadComponent: () =>
      import('./pages/voluntariado/voluntariado')
        .then(m => m.VoluntariadoComponent)
  },
  {
    path: 'voluntariado/porque-voluntario',
    loadComponent: () =>
      import('./pages/voluntariado/porque-voluntario/porque-voluntario')
        .then(m => m.PorqueSerVoluntarioComponent)
  },
  {
    path: 'voluntariado/profesional',
    loadComponent: () =>
      import('./pages/voluntariado/profesional/profesional')
        .then(m => m.Profesional)
  },
  {
    path: 'voluntariado/requisitos',
    loadComponent: () =>
      import('./pages/voluntariado/requisitos/requisitos')
        .then(m => m.RequisitosComponent)
  },
  {
    path: 'voluntariado/preguntas-frecuentes',
    loadComponent: () =>
      import('./pages/voluntariado/preguntas-frecuentes/preguntas-frecuentes')
        .then(m => m.PreguntasFrecuentes)
  },
  {
    path: 'voluntariado/registro',
    loadComponent: () =>
      import('./pages/voluntariado/registro/registro')
        .then(m => m.RegistroComponent)
  },

  // RUTA NO ENCONTRADA
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
