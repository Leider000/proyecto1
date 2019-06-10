import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoCompleto } from '../../interfaces/producto-completo.interface';

@Component({
  selector: 'app-porta-item',
  templateUrl: './porta-item.component.html',
  styleUrls: ['./porta-item.component.scss']
})
export class PortaItemComponent implements OnInit {

    productoD : ProductoCompleto;
    id: String;

  constructor(private route: ActivatedRoute,
              public servi: ProductoService) {

   }

  ngOnInit() {
    this.route.params.subscribe(
      parametros=>{
        console.log(parametros['id']);

        this.servi.getProducto(parametros['id']).
        subscribe( (producto : ProductoCompleto)=> {

          this.id = parametros['id'];
          this.productoD = producto;  
          console.log(producto);
        });
      }
    )
  }

}
