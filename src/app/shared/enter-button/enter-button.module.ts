import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EnterButtonComponent } from './enter-button.component';



@NgModule({
  declarations: [
    EnterButtonComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule
  ],
  exports: [
    EnterButtonComponent
  ]
})
export class EnterButtonModule { }
