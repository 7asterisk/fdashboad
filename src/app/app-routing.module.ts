import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllproductsComponent } from './pages/products/allproducts/allproducts.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'products', component: AllproductsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
