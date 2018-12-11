import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingComponent } from './clothing.component';
import { MensclothingComponent } from './mensclothing/mensclothing.component';
import { WomensclothingComponent } from './womensclothing/womensclothing.component';
import {ThemeModule} from "../../@theme/theme.module";
import {ClothingRoutingModule} from "./clothing-routing.module";



@NgModule({
  declarations: [ClothingComponent, MensclothingComponent, WomensclothingComponent],
  imports: [
    CommonModule,
    ThemeModule,
    ClothingRoutingModule,
  ]
})
export class ClothingModule { }
