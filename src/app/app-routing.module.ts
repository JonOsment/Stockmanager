import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { InventoryListComponent } from './inventory-list/inventory-list.component'

const routes: Routes = [
  {path: 'Inventory', component: InventoryListComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
