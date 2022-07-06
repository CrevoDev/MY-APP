import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }
  menus: any[] = [
    { name: 'HOME', path: '/home' },
    { name: 'VENDAS', path: '/sales' },
    { name: 'CAIXA', path: '/cashier' },
    { name: 'ESTOQUE', path: '/inventory' },
  ]

  ngOnInit(): void {
  }

  getButton(menu: { path: any; }): void {
    this.router.navigate([menu.path])
  }

}
