import { Component, OnInit } from '@angular/core';
import {PlatosModel} from '../../model/platosModel';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {
  ruta = 'assets/bebidas/';
  listaBebidas: PlatosModel[]=[
  {
    id: '1',
    nombre: 'Gaseosa',
    foto: this.ruta + 'gaseosa.png',
    // eslint-disable-next-line max-len
    descripcion: 'Es una bebida hecha con agua carbonatada (lo que aporta el gas), edulcorantes, colorantes, antioxidantes, entre otros componentes. Las gaseosas suelen tener sabores como cola, naranja, limón y uva.',
    precio: 2,
    numItems: 0,
  },
    {
      id: '2',
      nombre: 'Vino',
      foto: this.ruta + 'vino.png',
      // eslint-disable-next-line max-len
      descripcion: 'Del latín vinum, el vino es una bebida alcohólica que se hace a partir de la uva. El proceso implica la fermentación alcohólica del zumo o mosto a través de la acción metabólica de levaduras.',
      precio: 2,
      numItems: 0,
    },
    {
      id: '3',
      nombre: 'Té helado',
      foto: this.ruta + 'limonada.png',
      // eslint-disable-next-line max-len
      descripcion: 'Té helado a todas horas y de dos en dos. En verano lo infusiono con agua del tiempo. Una cucharadita de té por taza de agua + 1 extra para la jarra o tetera.',
      precio: 2,
      numItems: 0,
    },
    {
      id: '4',
      nombre: 'Martini',
      foto: this.ruta + 'martini.png',
      // eslint-disable-next-line max-len
      descripcion: 'Un coctel clásico e infaltable en las barras del mundo. El Martini es una receta que es tan icónica de la coctelería como variada, pues las tendencias apuntan a explorar nuevos límites para esta bebida.',
      precio: 2,
      numItems: 0,
    },
    {
      id: '5',
      nombre: 'Redbull',
      foto: this.ruta + 'redbull.png',
      // eslint-disable-next-line max-len
      descripcion: 'Estas bebidas contienen hidratos de carbono (azúcares), que pueden ofrecer un aporte inmediato de energía cuando se gastan las reservas del cuerpo. Las bebidas deportivas también contienen electrolitos, como el sodio y el potasio, que el cuerpo pierde a través del sudor.',
      precio: 2,
      numItems: 0,
    },
    {
      id: '6',
      nombre: 'Bebidas a base de café',
      foto: this.ruta + 'mocaccino.png',
      // eslint-disable-next-line max-len
      descripcion: 'En efecto, para celebrar estas fiestas un mocachino es una excelente opción a la hora de elegir qué café tomar cuando estás en un coffee shop o en casa con amigos y familiares.',
      precio: 2,
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
