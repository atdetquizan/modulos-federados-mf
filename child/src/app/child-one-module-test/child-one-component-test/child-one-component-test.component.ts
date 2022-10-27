import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-child-one-component-test',
  templateUrl: './child-one-component-test.component.html',
  styleUrls: ['./child-one-component-test.component.scss'],
})
export class ChildOneComponentTestComponent implements OnInit {
  constructor(@Inject('CONFIG_ENV') public envConfig: any) {
    console.log('Env from child', envConfig);
  }

  ngOnInit(): void {}
}
