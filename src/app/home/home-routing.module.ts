import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomePage,
    children: [
      {
        path: 'platillos',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/comida/comida.module').then( m => m.ComidaPageModule)
          }
        ],
      },
      {
        path: 'bebidas',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/bebidas/bebidas.module').then( m => m.BebidasPageModule)
          }
        ],
      },
      {
        path: 'postres',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/postres/postres.module').then( m => m.PostresPageModule)
          }
        ],
      },
      {
        path: 'cuenta',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
          }
        ],
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
          }
        ],
      },
      {
        path: 'registro',
        children: [
          {
            path: '',
            loadChildren: () => import('../registro/registro.module').then( m => m.RegistroPageModule)
          }
        ],
      },
      {
        path: '',
        redirectTo: '/inicio/platillos',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/inicio/platillos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
