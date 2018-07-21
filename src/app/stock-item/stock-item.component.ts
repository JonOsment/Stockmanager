import { Component, OnInit, Input } from '@angular/core';
import {StockItem} from '../Models/StockItem';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent implements OnInit {
  @Input() item : StockItem;
  constructor() { }

  ngOnInit() {
  }

}
