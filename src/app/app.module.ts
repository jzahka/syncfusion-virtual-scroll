import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule, VirtualScrollService } from '@syncfusion/ej2-angular-treegrid';
import { MatChipsModule } from '@angular/material/chips';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TreeGridModule,
    MatChipsModule,
  ],
  providers: [
    VirtualScrollService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
