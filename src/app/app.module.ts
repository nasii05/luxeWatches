import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { KidsComponent } from './components/kids/kids.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    WishlistComponent,
    NavbarComponent,
    FooterComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ContactComponent,
    AboutComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
