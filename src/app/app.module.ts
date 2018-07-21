import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    InventoryListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'StockManagerApp'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
