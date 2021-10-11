import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FindProduct } from "src/app/data/models/response/product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  private routeSub: Subscription;

  category: string;
  products: FindProduct[] = [
    {
      productId: 100001,
      name: "Televisor 40'",
      brand: "Samsung",
      model: "S40LNK2019",
      stock: 30,
      description:
        "Accesorios incluidos Control Remoto, Manual de uso y Tarjeta de garantía / Alto (con/sin base) 72.1 cm con base/ Ancho 116.4 cm/ Aplicaciones destacadas Netflix, Google y Youtube. /Conexión Bluetooth Sí/ Conexión WiFi Sí/ Contraste Gran contraste/ Control remoto incluido Sí / Entrada Internet Sí / Entradas auxiliares de 3.5 mm No incluye / Entradas HDMI 3 / Entradas RCA Sin entradas / Entradas USB 2 / Entradas VGA Sin entradas / Garantía del proveedor 1 Año / Hecho en México / Lentes 3D incluidos No / Peso 12.9 kg / Potencia de los parlantes 20 Watts / Profundidad 32.5 cm con base / Resolución 4K Ultra HD / Sintonizador digital Sí / Sintonizador TDT No Aplica / Smart TV Sí / Tamaño de la pantalla 50 pulgadas / Tasa de refresco nativa AC100-240V 50/60Hz / Tecnología LED / Tipo de pantalla Plana / Tipo Televisores",
      price: 1999,
      url: "https://i.linio.com/p/8637b377f896c4216ffa1354c2836275-product.webp",
      category: "Televisores",
    },
  ];
  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.category = params["category"]; //obtenemos el id del route para usarlo en servicios
    });
  }
}
