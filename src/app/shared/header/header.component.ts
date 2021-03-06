import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../service/info-pagina.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService,
               public router: Router) {
    
   }
       
  ngOnInit() {
  }

  buscarProducto(termino: String){
     //console.log(termino);
     if(termino.length < 1){
        return;
     }
     this.router.navigate(['/search',termino]);
  }
}
