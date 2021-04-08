import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProductListComponent} from './products/product-list/product-list.component';
import {HomeContentComponent} from './home/home-content.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'products', component: ProductListComponent},
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
