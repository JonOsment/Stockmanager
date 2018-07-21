import { Component, OnInit } from '@angular/core';
import {StockItem} from '../Models/StockItem';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  StockItemList : StockItem[]

  constructor() { }

  ngOnInit() {

    this.StockItemList = [
      { Id : 111, Name : 'Name', StockAmount : 1000 },
      { Id : 2, Name : 'Thing21', StockAmount : 100 }
    ];

  }

}
