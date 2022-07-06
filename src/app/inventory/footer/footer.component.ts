import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() values: any

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.values
    },1000)
  }

  getCurrency(value:any) {
    return value.toLocaleString(undefined, {
      style: 'currency',
      currency: 'BRL',
    });
  }

}
