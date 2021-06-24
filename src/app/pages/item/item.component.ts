import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcionInterface } from 'src/app/interfaces/productsDescription.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcionInterface = {}
  id: string

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService) {
      this.id = '';
    }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      this.productoService.getProducto(parametros['productoId'])
        .subscribe( producto => {
          this.id = parametros['productoId']
          this.producto = producto
        })
    })
  }

}
