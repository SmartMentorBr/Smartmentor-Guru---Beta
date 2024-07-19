import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { SmartCarouselComponent } from './components/smart-carousel/smart-carousel.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeSolutionComponent } from './modals/home-solution/home-solution.component';
import { HomeDiagnoseComponent } from './modals/home-diagnose/home-diagnose.component';
import { HomeApartofComponent } from './modals/home-apartof/home-apartof.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ComingSoonComponent } from './modals/coming-soon/coming-soon.component';
import { FaqComponent } from './modals/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TranslatePipe,
    FooterComponent,
    SmartCarouselComponent,
    HomeSolutionComponent,
    HomeDiagnoseComponent,
    HomeApartofComponent,
    PlansComponent,
    ComingSoonComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    HomeSolutionComponent,
    HomeDiagnoseComponent,
    HomeApartofComponent,
    ComingSoonComponent,
    FaqComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
