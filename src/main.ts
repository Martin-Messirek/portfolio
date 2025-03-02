import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Import the appConfig
// import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
	providers: [
		...appConfig.providers,
		// provideRouter(
		// 	routes,
		// 	withInMemoryScrolling({
		// 		scrollPositionRestoration: 'enabled', // Optional: Merkt sich die Scrollposition beim Navigieren
		// 		anchorScrolling: 'enabled', // Aktiviert das Scrollen zu Ankern (#id)
		// 	}),
		// ),
	],
}).catch((err) => console.error(err));
