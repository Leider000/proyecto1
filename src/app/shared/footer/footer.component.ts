import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../service/info-pagina.service';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(public _service : InfoPaginaService,
              public _producto: ProductoService) {
    
   }

  
  ngOnInit() {
  }

}
