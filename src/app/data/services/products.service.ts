import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env";
import { HttpService } from "@shared/service/http.service";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Catalog } from "../models/response/catalog.models";
import { ProductCatalogModel } from "../models/response/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  elementsData = [
    {
      id: 1,
      idProductCatalog: "118143964",
      productBrand: "Intel",
      productModel:
        "Procesador Intel Core i9-12900KS 2.50 / 5.50GHz 30MB Intel Smart Caché",
      description:
        "Procesador Intel Core i9-12900KS 2.50 / 5.50GHz 30MB Intel Smart Caché, LGA1700, 10nm",
      unitprice: 19.99,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_118143963_1990370_1?wid=1500&hei=1500&qlt=70",
    },
    {
      id: 2,
      idProductCatalog: "118152947",
      productBrand: "118152947",
      productModel:
        "Monitor Samsung S34J550WQL 34.1 UltraWide 2K 3440x1440, FreeSync.",
      description:
        "Multitareas fácil, crea un gran espacio de trabajo para ver todos sus documentos en una pantalla ultra grande de 34 pulgadas, la resolución ideal de WQHD 21: 9 te sumerge en el vibrante mundo del entretenimiento con una calidad de imagen más nítida en cada detalle.",
      unitprice: 1299,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_118152946_1995606_1?wid=1500&hei=1500&qlt=70",
    },
    {
      id: 3,
      idProductCatalog: "115982528",
      productBrand: "APPLE",
      productModel: "Apple Iphone 13 128GB Verde",
      description:
        "El iPhone 13 es un móvil que se siente premium nada más cogerlo. Si de algo sabe Apple es de construir móviles, y se nota. Es agradable al tacto y, a pesar de tener una pantalla relativamente grande 6.1, se siente compacto y equilibrado. Es un iPhone bastante ligero y no es pesado usarlo con una sola mano. En cuanto a conexiones y puertos, sin sorpresas. El lateral derecho queda reservado para el botón de inicio, el izquierdo aloja los botones de volumen, la pestaña para el modo vibración y la bandeja de la SIM y el marco inferior guarda el puerto Lightning (perfectamente centrado) y los altavoces. El otro altavoz, para el estéreo, está en el notch. En resumidas cuentas, es un móvil muy bien construido, compacto y perfectamente terminado. Esto, todo sea dicho, es algo exigible si tenemos en cuenta su precio. Llevando una pantalla de 6,1 pulgadas, panel Super Retina XDR OLED con resolución FullHD+. Seguimos con el rendimiento, un apartado que nos ha dejado con un sabor de boca exquisito. Apple sabe lo que se hace cuando habla de procesadores y el Apple A15 Bionic es, sencillamente, espectacular. Se trata de un procesador de cinco nanómetros que, ojo, no es exactamente el mismo que el de los Pro: en los iPhone 13 la GPU tiene cuatro núcleos mientras que en los iPhone 13 Pro tiene cinco. El procesador está acompañado por 4 GB de memoria RAM, la misma que los iPhone 12, y en esta ocasión, por fin, partimos los 128 GB de almacenamiento interno. Y llegamos así al apartado de la cámara Cámara principal: 12 megapíxeles con apertura f/1.6, 26 milímetros, píxeles de 1,7 micras, dual pixel PDAF y estabilización por desplazamiento.Cámara gran angular: 12 megapíxeles con apertura f/2.4, el iPhone 13 es capaz de grabar en Dolby Vision, cuenta con el modo Deep Fusion (que seguimos sin saber cuándo se activa y cuándo no) y con modo noche.",
      unitprice: 3359,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_115982527_1328032_1?wid=1500&hei=1500&qlt=70",
    },
    {
      id: 4,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_120248925_2614548_1?wid=1500&hei=1500&qlt=70",
    },
    {
      id: 5,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://sodimac.scene7.com/is/image/SodimacPeru/4069374_01?wid=180",
    },
    {
      id: 6,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://sodimac.scene7.com/is/image/SodimacPeru/4069374_01?wid=180",
    },
    {
      id: 7,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_115468164_1127619_1?wid=180",
    },
    {
      id: 8,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage: "https://s7d2.scene7.com/is/image/TottusPE/42673737_1?wid=180",
    },
    {
      id: 9,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://sodimac.scene7.com/is/image/SodimacPeru/4057201_01?wid=180",
    },
    {
      id: 10,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://sodimac.scene7.com/is/image/SodimacPeru/4095634_00?wid=180",
    },
    {
      id: 11,
      idProductCatalog: "118143964",
      productBrand: "Intel",
      productModel:
        "Procesador Intel Core i9-12900KS 2.50 / 5.50GHz 30MB Intel Smart Caché",
      description:
        "Procesador Intel Core i9-12900KS 2.50 / 5.50GHz 30MB Intel Smart Caché, LGA1700, 10nm",
      unitprice: 19.99,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_118143963_1990370_1?wid=1500&hei=1500&qlt=70",
    },
    {
      id: 12,
      idProductCatalog: "118152947",
      productBrand: "118152947",
      productModel:
        "Monitor Samsung S34J550WQL 34.1 UltraWide 2K 3440x1440, FreeSync.",
      description:
        "Multitareas fácil, crea un gran espacio de trabajo para ver todos sus documentos en una pantalla ultra grande de 34 pulgadas, la resolución ideal de WQHD 21: 9 te sumerge en el vibrante mundo del entretenimiento con una calidad de imagen más nítida en cada detalle.",
      unitprice: 1299,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_118152946_1995606_1?wid=1500&hei=1500&qlt=70",
    },
    {
      id: 13,
      idProductCatalog: "115982528",
      productBrand: "APPLE",
      productModel: "Apple Iphone 13 128GB Verde",
      description:
        "El iPhone 13 es un móvil que se siente premium nada más cogerlo. Si de algo sabe Apple es de construir móviles, y se nota. Es agradable al tacto y, a pesar de tener una pantalla relativamente grande 6.1, se siente compacto y equilibrado. Es un iPhone bastante ligero y no es pesado usarlo con una sola mano. En cuanto a conexiones y puertos, sin sorpresas. El lateral derecho queda reservado para el botón de inicio, el izquierdo aloja los botones de volumen, la pestaña para el modo vibración y la bandeja de la SIM y el marco inferior guarda el puerto Lightning (perfectamente centrado) y los altavoces. El otro altavoz, para el estéreo, está en el notch. En resumidas cuentas, es un móvil muy bien construido, compacto y perfectamente terminado. Esto, todo sea dicho, es algo exigible si tenemos en cuenta su precio. Llevando una pantalla de 6,1 pulgadas, panel Super Retina XDR OLED con resolución FullHD+. Seguimos con el rendimiento, un apartado que nos ha dejado con un sabor de boca exquisito. Apple sabe lo que se hace cuando habla de procesadores y el Apple A15 Bionic es, sencillamente, espectacular. Se trata de un procesador de cinco nanómetros que, ojo, no es exactamente el mismo que el de los Pro: en los iPhone 13 la GPU tiene cuatro núcleos mientras que en los iPhone 13 Pro tiene cinco. El procesador está acompañado por 4 GB de memoria RAM, la misma que los iPhone 12, y en esta ocasión, por fin, partimos los 128 GB de almacenamiento interno. Y llegamos así al apartado de la cámara Cámara principal: 12 megapíxeles con apertura f/1.6, 26 milímetros, píxeles de 1,7 micras, dual pixel PDAF y estabilización por desplazamiento.Cámara gran angular: 12 megapíxeles con apertura f/2.4, el iPhone 13 es capaz de grabar en Dolby Vision, cuenta con el modo Deep Fusion (que seguimos sin saber cuándo se activa y cuándo no) y con modo noche.",
      unitprice: 3359,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_115982527_1328032_1?wid=1500&hei=1500&qlt=70",
    },
    {
      id: 14,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_120248925_2614548_1?wid=1500&hei=1500&qlt=70",
    },
    {
      id: 15,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://sodimac.scene7.com/is/image/SodimacPeru/4069374_01?wid=180",
    },
    {
      id: 16,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://sodimac.scene7.com/is/image/SodimacPeru/4069374_01?wid=180",
    },
    {
      id: 17,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://falabella.scene7.com/is/image/FalabellaPE/gsc_115468164_1127619_1?wid=180",
    },
    {
      id: 18,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage: "https://s7d2.scene7.com/is/image/TottusPE/42673737_1?wid=180",
    },
    {
      id: 19,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://sodimac.scene7.com/is/image/SodimacPeru/4057201_01?wid=180",
    },
    {
      id: 110,
      idProductCatalog: "120248926",
      productBrand: "APPLE",
      productModel: "iPhone 12 Mini 64GB 4GB Blanco - REACONDICIONADO",
      description:
        "Al ser un articulo reacondicionado, éste podría presentar algunos signos de desgaste, como raspaduras, rasguños, abolladuras, y/o calcomanías. Sin embargo, la condición estética no afecta el rendimiento que si es totalmente bueno, listo para nuevos usuarios.",
      unitprice: 1922,
      urlimage:
        "https://sodimac.scene7.com/is/image/SodimacPeru/4095634_00?wid=180",
    },
  ];
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8",
    }),
  };
  // tslint:disable-next-line:typedef
  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  private APIENDPOINT: string = environment.urlApiService;
  constructor(private httpService: HttpService, private http: HttpClient) {}

  private cartKey = "cart";

  guardarProductoEnCarrito(producto: any): void {
    // Obtener el carrito actual del localStorage
    const cart = this.getCartFromLocalStorage();

    // Agregar el producto al carrito
    cart.push(producto);

    // Guardar el carrito actualizado en el localStorage
    this.saveCartToLocalStorage(cart);
  }

  listarProductosEnCarrito(): any[] {
    // Obtener el carrito actual del localStorage
    const cart = this.getCartFromLocalStorage();

    // Devolver los productos del carrito
    return cart;
  }

  eliminarProductoDelCarrito(id: number): void {
    // Obtener el carrito actual del localStorage
    const cart = this.getCartFromLocalStorage();

    // Encontrar el índice del producto en el carrito
    const index = cart.findIndex((producto) => producto.id === id);

    // Si se encontró el producto, eliminarlo del carrito
    if (index !== -1) {
      cart.splice(index, 1);
    }

    // Guardar el carrito actualizado en el localStorage
    this.saveCartToLocalStorage(cart);
  }

  getCartFromLocalStorage(): any[] {
    // Obtener el carrito actual del localStorage o inicializar uno vacío si no existe
    const cartJSON = localStorage.getItem(this.cartKey);
    return cartJSON ? JSON.parse(cartJSON) : [];
  }

  saveCartToLocalStorage(cart: any[]): void {
    // Guardar el carrito en el localStorage como JSON
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem(this.cartKey, cartJSON);
  }

  getProductCatalog(pageSize: number, pageIndex: number): any {
    const startIndex = pageSize * pageIndex;
    const endIndex = startIndex + pageSize;
    const pagedItems = this.elementsData.slice(startIndex, endIndex);
    const totalItems = this.elementsData.length;
    console.log(pageSize, pageIndex);
    return {
      data: pagedItems,
      total: totalItems,
    };
  }

  getProduct(id: number): any {
    console.log(id);
    const product = this.elementsData.find((val) => val.id == id);
    console.log(product);
    return product;
  }

  getProductCatalog1(
    productId: string,
    brand: string,
    model: string,
    price: number
  ) {
    return this.httpService.get(
      `${this.APIENDPOINT}/products/productcatalog?idProductCatalog=${productId}&productBrand=${brand}&productModel=${model}&unitprice=${price}&urlimage=string`
    );
  }
  getProductCatalog2(
    productId: string,
    brand: string,
    model: string,
    price: number
  ): Observable<Catalog> {
    return this.http
      .get<Catalog>(
        `${this.APIENDPOINT}/products/productcatalog?idProductCatalog=${productId}&productBrand=${brand}&productModel=${model}&unitprice=${price}&urlimage=string`,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
}
