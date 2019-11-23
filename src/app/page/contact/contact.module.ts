import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FormsModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
