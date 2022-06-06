import { Component, OnInit } from '@angular/core';
import {PlatosModel} from '../../model/platosModel';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {
  ruta = 'assets/comidas_tipicas/';
  listaPlatos: PlatosModel[] = [{
    id: '1',
    nombre: 'Tortillas con chorizo',
    foto: this.ruta + 'tortillas_con_chorizo.jpg',
    descripcion: 'Plato típico de tortillas de papa y chorizo acompañado con una ensalada de lechuga con remolacha y zanahora',
    precio: 8,
    numItems: 0,
  },
    {
      id: '2',
      nombre: 'Llapingacho',
      foto: this.ruta + 'llapingacho.jpg',
      descripcion: 'Plato típico de tortillas de papa, chorizo y mote acompañado con una ensalada de lechuga con remolacha y zanahora',
      precio: 8,
      numItems: 0,
    },
    {
      id: '3',
      nombre: 'Hornado',
      foto: this.ruta + 'hornado.jpg',
      descripcion: 'Plato típico de carne de cerdo cocinado en leña acompañado de tortilla de papas y una ensalada de lechuga con tomate',
      precio: 8,
      numItems: 0,
    },
    {
      id: '4',
      nombre: 'Fritada',
      foto: this.ruta + 'fritada.jpg',
      descripcion: 'Plato típico de carne de cerdo frita acompañada de mote, choclo o mezclado con tostado',
      precio: 8,
      numItems: 0,
    },
    {
      id: '5',
      nombre: 'Cuy asado',
      foto: this.ruta + 'cuy_asado_con_papas.jpg',
      descripcion: 'Plato típico de cuy asado con papas',
      precio: 8,
      numItems: 0,
    },
    {
      id: '6',
      nombre: 'Bolón de verde',
      foto: this.ruta + 'bolon_de_verde.jpg',
      descripcion: 'Plato típico de bola de verde frito relleno de chicharrón o queso',
      precio: 8,
      numItems: 0,
    },
    {
      id: '7',
      nombre: 'Empanadas de verde',
      foto: this.ruta + 'empanadas_de_verde.jpg',
      descripcion: 'Plato típico de tortillas de papa, chorizo y mote acompañado con una ensalada de lechuga con remolacha y zanahora',
      precio: 8,
      numItems: 0,
    },
    {
      id: '8',
      nombre: 'Humita',
      foto: this.ruta + 'humita.jpg',
      descripcion: 'Plato típico de tortillas de papa, chorizo y mote acompañado con una ensalada de lechuga con remolacha y zanahora',
      precio: 8,
      numItems: 0,
    },

  ];

  constructor() { }

  ngOnInit() {
  }
  clicAdditem(item){
    item.numItems++;
  }
  clicRemoveitem(item){
    if(item.numItems>0){
      item.numItems--;
    }
  }

}
