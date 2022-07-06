import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory/inventory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date : any

  productsSaled : any[] = [
    {name: 'Iphone', value: 1500.00 },
    {name: 'Samsung', value: 1000.00 },
    {name: 'Motorola', value: 900.00 },
    {name: 'Nokia', value: 175.00 }

  ]

  productsOnInventory : any[] = []

  dashboards : any[] = [
    { name: 'PRODUTOS VENDIDOS', path: 'sails' },
    { name: 'PRODUTOS EM ESTOQUE', path: 'onInventory' },
    { name: 'DATA', path: 'date' },
  ]
  constructor(
    public inventoryService: InventoryService
  ) { 
    setInterval(() => {
      this.date = new Date().toLocaleString()
    },1000)
  }

  ngOnInit(): void {
    this.productsOnInventory = this.inventoryService.getItems()
  }

  getDashboard(dash : any) {
    if(dash.path == 'date') {
      return this.date
    }
    if(dash.path == 'sails') {
      let total = 0
      this.productsSaled.forEach(item => total += item.value)
      return total.toLocaleString('en-US', {
        style:'currency',
        currency:'BRL'
      })
    }
    if(dash.path == 'onInventory') {
      let inventory = 0;
      this.productsOnInventory.forEach((value) => (inventory += value.inventory * 1));
      return inventory;
    }
    return 'NADA A MOSTRAR'
  }

}
