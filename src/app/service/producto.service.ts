import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    productos : Producto[]=[];
    cargando = true;
    productosFiltrados : Producto[] = [];

  constructor(private http: HttpClient) { 
   
    this.cargarProductos();
  }

  private cargarProductos(){
    //Mostrar productos
      //utilizado para proceso de filtrado
      return new Promise((resolve,reject)=>{
           
        this.http.get('https://angular-html-e08f4.firebaseio.com/productos_idx.json')
      .subscribe( (resp : Producto[] ) => {
          this.productos = resp;
          console.log(resp);
          //console.log(cargando);
             

          setTimeout( () => {
            this.cargando = false;
          }, 1000
          );
          resolve();
      }

      )
      });  
    
      
  }

  getProducto( id: String){
    //Filtrado de id del json para llegar a un nuevo producto
      return this.http.get('https://angular-html-e08f4.firebaseio.com/productos/'+id+'.json');

  }
  buscarProducto(termino: String){
      
    if(this.productos.length===0){
          //cargar productos
          this.cargarProductos().then( ()=>{
             //ejecutar despues de tener los productos
             //Aplicar filtro
          this.filtrarProductos(termino.toLowerCase());
          });
    }else{
      //aplicar filtro
      this.filtrarProductos( termino.toLowerCase() );
    }
    // Funciones para la barra de busqueda
    //Hace lo mismo que el metodo de filtrarProductos, planteado de otra manera
    //this.productosFiltrados = this.productos.filter( producto => {
        //return true;
      //});
      
      console.log(this.productosFiltrados);
  }
  
  private filtrarProductos(termino: string){
     console.log(this.productos);
     this.productosFiltrados = [];
      
     termino = termino.toLowerCase();
     this.productos.forEach( produc => {
       const tituloLower = produc.titulo.toLowerCase();

       if((produc.categoria.indexOf(termino) >= 0) || (tituloLower.indexOf(termino) >=0 )) {
         this.productosFiltrados.push(produc);
       }
     })
  }

}
