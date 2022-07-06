import { Component, Input, OnInit, Output } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  @Output() items: any[] = []

  showData!: any[]
  totalData: any[] = []

  constructor(
    public inventoryService : InventoryService
  ) { }

  ngOnInit(): void {
    this.items = this.inventoryService.getItems()
    this.showData = this.items
    this.getTotal()
  }

  refresh() {
    return this.ngOnInit()
  }

  search(params: any) {
    if (params) {
      this.showData = []
      this.totalData = []
      this.showData = this.inventoryService.search(params)
      return this.getTotal()
    }
    return this.ngOnInit()
  }
  
  addData(data: any) {
    this.inventoryService.addData(data)
    this.ngOnInit()
  }

  getTotal() {
    let totalCoust = this.getCoust()
    let totalPrice = this.getPrice()
    let totalInventory = this.getInventory()
    let totalProfit = this.getProfit(totalPrice, totalCoust)
    this.totalData = [{
      totalCoust: totalCoust,
      totalPrice: totalPrice,
      totalInventory: totalInventory,
      totalProfit: totalProfit
    }]
  }

  getCoust() {
    let total = 0
    this.showData.forEach(value => total += value.coust * value.inventory)
    return total
  }

  getPrice() {
    let total = 0
    this.showData.forEach(value => total += value.price * value.inventory)
    return total
  }

  getInventory() {
    let inventory = 0
    this.showData.forEach(value => inventory += value.inventory * 1)
    return inventory
  }

  getProfit(totalPrice:any, totalCoust:any) {
    return totalPrice - totalCoust
  }

}
