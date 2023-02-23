import { Component, Input } from '@angular/core';
import { Products } from '../../products';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  @Input() addPedidos: Products[] = [];

//  console.log(this.addPedidos);
mostrarPedido(){
  console.log(this.addPedidos);
  
}

}

