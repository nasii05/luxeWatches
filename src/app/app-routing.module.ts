import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { KidsComponent } from './components/kids/kids.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'men', component: MenComponent },
  {path:'women', component: WomenComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
