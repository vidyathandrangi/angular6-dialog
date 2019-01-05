import { DialogboxserviceService } from './dialogboxservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DialogboxComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [DialogboxserviceService],
  bootstrap: [AppComponent],
  entryComponents: [DialogboxComponent]
})
export class AppModule { }
