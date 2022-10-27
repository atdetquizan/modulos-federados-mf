import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
(async () => {
  console.log('Running env:', environment.env);
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
  });

  const config = await response.json();
  const notChangeArray = ['production', 'standalone'];
  Object.keys(config).map((x) => {
    if (!notChangeArray.includes(x)) {
      environment[x] = config[x];
    }
  });
})();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
