import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Import the appConfig

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Add the providers from appConfig
  ],
}).catch((err) => console.error(err));
