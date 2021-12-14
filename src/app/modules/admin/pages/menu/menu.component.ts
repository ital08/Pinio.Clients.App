import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
  }
  paginaProductos(){
    this.router.navigateByUrl("/admin/Productos");
  }
  paginaPersonal(){
    this.router.navigateByUrl("/admin/Empleados");
  }
  paginaUsuarios(){
    this.router.navigateByUrl("/admin/Usuarios");
  }

}
