import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsComponent } from './pages/collections/collections.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'payment',component:PaymentComponent
  },
  {
    path:'collections',component:CollectionsComponent
  },
  
  {
    path:'login',component:LogInComponent
  },
  
  {
    path:'contact',component:ContactComponent
  },
  
  {
    path:'order',component:OrderComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
