import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { LogInComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';

import { OrderComponent } from './pages/order/order.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PaymentComponent } from './pages/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionsComponent,
    LogInComponent,
    ContactComponent,
    OrderComponent,
    NavbarComponent,
    FooterComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
