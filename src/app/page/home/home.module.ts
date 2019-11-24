import { HeaderModule } from './../common/header/header.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RecommendComponent } from './recommend/recommend.component';
import { KnowladgeComponent } from './knowladge/knowladge.component';
import { ZeroWasteComponent } from './zero-waste/zero-waste.component';
import {TooltipModule} from 'primeng/tooltip';
import {GalleriaModule} from 'primeng/galleria';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [HomeComponent, RecommendComponent, KnowladgeComponent, ZeroWasteComponent, RankingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TooltipModule,
    GalleriaModule,
    TranslateModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
