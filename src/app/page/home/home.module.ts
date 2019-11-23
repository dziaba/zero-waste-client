import { HeaderModule } from './../common/header/header.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RecommendComponent } from './recommend/recommend.component';
import { KnowladgeComponent } from './knowladge/knowladge.component';
import { ZeroWasteComponent } from './zero-waste/zero-waste.component';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [HomeComponent, RecommendComponent, KnowladgeComponent, ZeroWasteComponent],
  imports: [
    CommonModule,
    MaterialModule,
    GalleriaModule,
    TranslateModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
