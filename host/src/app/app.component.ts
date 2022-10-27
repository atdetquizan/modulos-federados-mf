import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf-host';
  envConfig = environment;
  constructor(private router: Router) {}

  public goToHome() {
    this.router.navigate(['/']);
  }

  public goToMF1() {
    this.router.navigate(['/mf-child-one']);
  }

  public goToMF2() {
    this.router.navigate(['/mf-child-two']);
  }
}
