import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loaded = true
  products: ProductoInterface[] = []
  productosFiltrado: ProductoInterface[] = []

  constructor(private http: HttpClient) {
    this.loadProducts()
  }

  private loadProducts() {

    return new Promise<void>((resolve, reject) => {
      // Leer el archivo JSON
      this.http
      .get('https://pruebas-vue-3fab3-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe( (r: any) => {
        this.products = r
        setTimeout(() => {
          this.loaded = false
        }, 2000)
        resolve();
      });
    })
  }

  getProducto(id: string) {
    return this.http
      .get(`https://pruebas-vue-3fab3-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`)
  }

  buscarProducto(termino: string) {
    if ( this.products.length === 0) {
      // cargar productos
      this.loadProducts().then(() => {
        // ejecución después de tener los productos
        // aplicar filtro
        this.filtrarProductos(termino)
      })
    } else {
      // aplicar filtro
      this.filtrarProductos(termino)
    }
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = []
    termino = termino.toLocaleLowerCase()
    this.products.forEach( prod => {
      let categoria = prod.categoria?.indexOf(termino) ?? ''
      let titulo = prod.titulo?.indexOf(termino) ?? ''
      let tituloLower = prod.titulo?.toLocaleLowerCase() ?? ''
      if(categoria >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod)
      }
    })
  }
}
