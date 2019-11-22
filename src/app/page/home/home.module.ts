import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
