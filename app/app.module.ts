import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
import { MatIconModule, MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
