import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { AppRootingModule } from './app.routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
  
    AppRootingModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
