import { Component, OnInit } from '@angular/core';
import {PlatosModel} from '../../model/platosModel';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
})
export class PostresPage implements OnInit {
  ruta = 'assets/postres/';
  listaPostres: PlatosModel[]=[
    {
      id: '1',
      nombre: 'Tiramisu',
      foto: this.ruta + 'Tiramisu.jpg',
      // eslint-disable-next-line max-len
      descripcion: 'Un tiramisú se compone siempre de un ingrediente sólido humedecido en café, sobre el que se superpone (de forma alterna o no) una crema cuya base son huevos batidos con azúcar; se presenta espolvoreado con cacao en polvo.',
      precio: 3,
      numItems: 0,
    },
    {
      id: '2',
      nombre: 'Panqueques',
      foto: this.ruta + 'Panqueque.jpg',
      // eslint-disable-next-line max-len
      descripcion: 'Los pancakes, son una especie de crêpe, salvando las distancias, que se elabora de la misma manera, calentando porciones de la pasta de sus ingredientes en una sartén.',
      precio: 3,
      numItems: 0,
    },
    {
      id: '3',
      nombre: 'Cheesecake',
      foto: this.ruta + 'Cheesecakejpg',
      // eslint-disable-next-line max-len
      descripcion: 'Los pancakes, son una especie de crêpe, salvando las distancias, que se elabora de la misma manera, calentando porciones de la pasta de sus ingredientes en una sartén.',
      precio: 3,
      numItems: 0,
    },
    {
      id: '4',
      nombre: 'Coulant',
      foto: this.ruta + 'Coulant.jpg',
      // eslint-disable-next-line max-len
      descripcion: 'Esponjoso por fuera y con un corazón líquido, el coulant de chocolate es una verdadera obra de arte de la repostería francesa, gracias a su ingeniosa combinación de texturas.',
      precio: 3,
      numItems: 0,
    },
    {
      id: '5',
      nombre: 'Torrijas',
      foto: this.ruta + 'Torrijas.jpg',
      // eslint-disable-next-line max-len
      descripcion: ' Las torrijas, ese delicioso manjar cuya receta ha pasado de generación en generación y que, a día de hoy, continúa siendo el dulce estrella de la Semana Santa.',
      precio: 3,
      numItems: 0,
    },
    {
      id: '6',
      nombre: 'Crumble',
      foto: this.ruta + 'Crumble.jpg',
      // eslint-disable-next-line max-len
      descripcion: 'El crumble es una elaboración dulce de origen anglosajón, formado por una capa de fruta fresca cubierta por una mezcla de harina, azúcar y mantequilla, que se cuece en el horno. El calor reblandece la fruta y endurece la cubierta o crumble, que no es más (ni menos) que una masa de galleta en migas.',
      precio: 3,
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
