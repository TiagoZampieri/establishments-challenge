import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
