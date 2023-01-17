import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menus: string[] = [
    'Licuadoras',
    'Cocinas',
    'Refrigeradoras',
    'Hornos',
    'Televisores',
    'Celulares',
    'Relojes',
  ];

  constructor() {}

  ngOnInit(): void {}

  prueba() {
    alert('Todavía no funciono :)');
  }
}
