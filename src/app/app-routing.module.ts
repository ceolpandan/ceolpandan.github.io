import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {HomeContentComponent} from './home/home-content.component';
import { ContactComponent } from './contact/contact.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
