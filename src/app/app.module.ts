import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlopalInterceptor } from './core/iterceptors/glopal.interceptor';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule,
    AdminModule,
    UserModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:GlopalInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
