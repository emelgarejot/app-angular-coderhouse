import { Component, OnInit } from '@angular/core';
import { Product } from './model/main.type';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products.push({
      urlImage:
        'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42857218_1-3aHTWbEO-medium.jpg',
      productDescription:
        'Vaso de vidrio refractario, Acople metálico, Cuchillas trituradoras de hielo, Perilla 50% más grande',
    });
    this.products.push({
      urlImage:
        'https://falabella.scene7.com/is/image/FalabellaPE/17512161_1?wid=800&amp;hei=800&amp;qlt=70',
      productDescription:
        'Licuadora Oster® de 3 velocidades. Capaces de manejar hasta las mezclas más difíciles con su motor con tecnología de motor reversible',
    });
    this.products.push({
      urlImage:
        'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42809942_1-HzIzsyVk-medium.jpg',
      productDescription:
        'Exclusiva tecnología reversible gira las cuchillas hacia adelante y hacia atrás procesando completamente todos los alimentos',
    });
    this.products.push({
      urlImage:
        'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42382247_2-HpjjGtm3-medium.jpg',
      productDescription:
        'Vaso de vidrio refractario, Acople metálico, Cuchillas trituradoras de hielo, Perilla 50% más grande',
    });
    this.products.push({
      urlImage:
        'https://falabella.scene7.com/is/image/FalabellaPE/18550119_1?wid=800&amp;hei=800&amp;qlt=70',
      productDescription:
        'Vaso de vidrio refractario, Acople metálico, Cuchillas trituradoras de hielo, Perilla 50% más grande',
    });
    this.products.push({
      urlImage:
        'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41497344_2-a3wCYfdD-medium.jpg',
      productDescription:
        'Vaso de vidrio refractario, Acople metálico, Cuchillas trituradoras de hielo, Perilla 50% más grande',
    });
    this.products.push({
      urlImage:
        'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42343547_4-xArzYaZb-medium.jpg',
      productDescription:
        'Vaso de vidrio refractario, Acople metálico, Cuchillas trituradoras de hielo, Perilla 50% más grande',
    });
    this.products.push({
      urlImage:
        'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42857218_1-3aHTWbEO-medium.jpg',
      productDescription:
        'Vaso de vidrio refractario, Acople metálico, Cuchillas trituradoras de hielo, Perilla 50% más grande',
    });
    this.products.push({
      urlImage:
        'https://falabella.scene7.com/is/image/FalabellaPE/17512161_1?wid=800&amp;hei=800&amp;qlt=70',
      productDescription:
        'Licuadora Oster® de 3 velocidades. Capaces de manejar hasta las mezclas más difíciles con su motor con tecnología de motor reversible',
    });
    this.products.push({
      urlImage:
        'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42809942_1-HzIzsyVk-medium.jpg',
      productDescription:
        'Exclusiva tecnología reversible gira las cuchillas hacia adelante y hacia atrás procesando completamente todos los alimentos',
    });
  }
}
