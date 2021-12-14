import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  iproducto: boolean = true;
  iorden: boolean = false;
  ilote: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  ingresarProducto(){
    this.iproducto = true;
    this.iorden = false;
    this.ilote = false;
  }
  ingresarOrden(){
    this.iproducto = false;
    this.iorden = true;
    this.ilote = false;
  }
  ingresarLote(){
    this.iproducto = false;
    this.iorden = false;
    this.ilote = true;
  }

}
