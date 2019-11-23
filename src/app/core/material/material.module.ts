import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatTooltipModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
