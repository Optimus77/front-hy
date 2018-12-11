import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClothingComponent} from "./clothing.component";
import {MensclothingComponent} from "./mensclothing/mensclothing.component";
import {WomensclothingComponent} from "./womensclothing/womensclothing.component";

const routes: Routes = [{
  path: '',
  component: ClothingComponent,
  children: [ {
    path: 'mensclothing',
    component: MensclothingComponent,
  }, {
    path: 'womensclothing',
    component: WomensclothingComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingRoutingModule { }
