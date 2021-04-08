import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent} from './products/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeContentComponent} from './home/home-content.component';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProductListComponent,
    HomeContentComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
