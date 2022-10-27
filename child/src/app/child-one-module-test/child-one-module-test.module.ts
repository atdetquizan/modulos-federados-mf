import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOneComponentTestComponent } from './child-one-component-test/child-one-component-test.component';
import { ChildOneModuleRouting } from './child-one-module-routing.module';



@NgModule({
  declarations: [
    ChildOneComponentTestComponent
  ],
  imports: [
    CommonModule,
    ChildOneModuleRouting
  ]
})
export class ChildOneModuleTestModule { }
