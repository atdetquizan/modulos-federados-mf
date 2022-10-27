import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HomeModule],
  providers: [
    {
      provide: 'CONFIG_ENV',
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
