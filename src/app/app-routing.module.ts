import { NgModule } from '@angular/core';
import { RouterModule, Routes ,ExtraOptions} from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

const extraOptions: ExtraOptions = {
  scrollPositionRestoration: "top"
}

@NgModule({
  imports: [RouterModule.forRoot(routes,extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
