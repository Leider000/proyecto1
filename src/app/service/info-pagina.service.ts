import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

   info : infoPagina={};
   cargada = false; 
    equipo : any[]=[];

  constructor(private http:HttpClient) { 

      //console.log("Prueba inicial de la pagina");

      //Leer el archivo json- pagina indicada
      this.cargarInfo(); 
      this.cargarEquipo(); 
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp : infoPagina) =>{
      
      //resp.rquipo_trabajo = this.cargarEquipo();
      
      this.cargada=true;
      this.info = resp;
      console.log(resp);
      
    })
  }
  private cargarEquipo(){
     this.http.get('https://angular-html-e08f4.firebaseio.com/equipo.json')
     .subscribe((resp : any) =>{
        this.equipo = resp;

          console.log(resp[1].frase);
          console.log(resp);
     }

     )
     
  } 
}

