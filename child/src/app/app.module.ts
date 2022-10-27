import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOneModuleTestModule } from './child-one-module-test/child-one-module-test.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChildOneModuleTestModule],
  providers: [
    {
      provide: 'CONFIG_ENV',
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
