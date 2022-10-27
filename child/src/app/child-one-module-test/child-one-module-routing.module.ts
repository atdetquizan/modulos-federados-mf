import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildOneComponentTestComponent } from './child-one-component-test/child-one-component-test.component';

const routes: Routes = [{
  path:'',
  component: ChildOneComponentTestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildOneModuleRouting { }