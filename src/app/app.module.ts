import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhatsAppComponent } from './whats-app/whats-app.component';
import { FeedbackFromComponent } from './feedback-from/feedback-from.component';
import { BackToTopButtonComponent } from './back-to-top-button/back-to-top-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductDetailComponent,
    HomeComponent,
    WhatsAppComponent,
    FeedbackFromComponent,
    BackToTopButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule,RouterModule]
})
export class AppModule { }
