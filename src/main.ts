// https://www.youtube.com/watch?v=zT_nQ2oNeRM&list=PLxr551TUsmAo457BgKV4dTzF__SUS5knW&ab_channel=ProfesseurMohamedYOUSSFI
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// he will load a module named AppModule min22
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
