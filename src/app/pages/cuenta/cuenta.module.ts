import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaPageRoutingModule } from './cuenta-routing.module';

import { CuentaPage } from './cuenta.page';
import {LoginPageModule} from '../login/login.module';
import {RegistroPageModule} from '../../registro/registro.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule,
    LoginPageModule,
    RegistroPageModule
  ],
  exports: [
    CuentaPage
  ],
  declarations: [CuentaPage]
})
export class CuentaPageModule {}
