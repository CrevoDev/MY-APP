import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  items: any[]= [
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" },
    { brand: 'Iphone', model: '12S', coust: "850", price: "2000", inventory: "20" },
    { brand: 'Samsung', model: 'M52 5G', coust: "700", price: "1700", inventory: "30" },
    { brand: 'Motorola', model: 'G10', coust: "500", price: "1200", inventory: "50" }
  ]

  constructor(

  ) { }

  getItems() {
    return this.items;
  }

  addData(data: Product<string>) {
    return this.items.push(data)
  }

  editData(data: any, previousItem: any) {
    let newArray: any[] = []
    this.items.map((item) => {
      if (item == previousItem)
        item = data
      newArray.push(item)
    })
    return this.items = newArray
  }

  removeData(data: any) {
    let newArray: any[] = []
    this.items.map((item: Product<string>) => {
      if (item == data)
        return
      newArray.push(item)
    })
    return this.items = newArray
  }

  search(params:any) {
    let data: any[] = []
    this.items.find((item: { model: string; }) => {
      let str = item.model.toLowerCase()
      if (str.includes(params.toLowerCase())) {
        data.push(item)
      }
    })
    return data
  }

  toFormGroup(fields: Product<string>[]) {
    const group: any = {}

    fields.forEach(field => {
      group[field.key] = field.required ?
        new FormControl(field.value, Validators.required) :
        new FormControl(field.value);
    })
    return new FormGroup(group);
  }

  editFormGroup(fields: Product<string>[], data: Product<any>) {
    const group: any = {}

    fields.forEach(field => {
      let value = ''

      Object.entries(data).map(([key, valueKey]) => {
        if(field.key.includes(key))
          value = valueKey
        return value
      })

      group[field.key] = field.required ?
        new FormControl(value, Validators.required) :
        new FormControl(value);
    })

    return new FormGroup(group);
  }

  getFields() {
    const fields: Product<string>[] = [
      {
        key: 'brand',
        label: 'Marca',
        value: '',
        required: true,
        type: 'text',
        readonly: false
      },
      {
        key: 'model',
        label: 'Modelo',
        value: '',
        required: true,
        type: 'text',
        readonly: false
      },
      {
        key: 'inventory',
        label: 'Estoque',
        value: '0',
        required: true,
        type: 'number',
        readonly: false
      },
      {
        key: 'coust',
        label: 'Custo',
        value: '0',
        required: true,
        type: 'number',
        readonly: false
      },
      {
        key: 'price',
        label: 'Preço',
        value: '0',
        required: true,
        type: 'number',
        readonly: false
      }
    ];

    return of(fields)
  }
}
