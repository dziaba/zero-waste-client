import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
