import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about')
        .then(m => m.About)
  },

  {
    path: 'experience',
    loadComponent: () =>
      import('./pages/experience/experience')
        .then(m => m.Experience)
  },

  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills/skills')
        .then(m => m.Skills)
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects')
        .then(m => m.Projects)
  },

  // {
  //   path: 'projects/:id',
  //   loadComponent: () =>
  //     import('./pages/projects/project-details/project-details')
  //       .then(m => m.ProjectDetails)
  // },

  {
    path: 'technical-showcase',
    loadComponent: () =>
      import('./pages/technical-showcase/technical-showcase')
        .then(m => m.TechnicalShowcase)
  },

  {
    path: 'github',
    loadComponent: () =>
      import('./pages/github/github')
        .then(m => m.Github)
  },

  {
    path: 'resume',
    loadComponent: () =>
      import('./pages/resume/resume')
        .then(m => m.Resume)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact')
        .then(m => m.Contact)
  },
   {
   path: '404',    loadComponent: () =>
      import('./pages/not-found/not-found')
        .then(m => m.NotFound)
  },

  {
    path: '**',
    redirectTo: '404'
  }

];