import { Component } from '@angular/core';
import { InfoPaginaService } from './service/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto1';
  constructor(public _infoPagina: InfoPaginaService){

  }
}
