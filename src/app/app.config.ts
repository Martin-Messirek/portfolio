import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, RouterModule } from '@angular/router';
import { TranslateService, TranslateLoader, TranslateStore, provideTranslateService } from '@ngx-translate/core';
// import { TranslationService } from './core/services/translation.service'; // Your TranslationService
// import { TRANSLATIONS } from './core/translation'; // Import the translations object
import { routes } from './app.routes';
import { CustomTranslateLoader } from './core/custom-translate-loader';
import { provideHttpClient } from '@angular/common/http';

// Custom loader for object-based translations
// export class CustomTranslateLoader implements TranslateLoader {
//   getTranslation(lang: string) {
//     return TRANSLATIONS[lang]; // Return the translations directly (no need for promises or observables)
//   }
// }

export const appConfig: ApplicationConfig = {
	providers: [
		provideTranslateService({
			defaultLanguage: 'en',
		}),
		{
			provide: TranslateLoader,
			useClass: CustomTranslateLoader, // Use custom loader for object-based translations
		},
		{
			provide: TranslateService,
			useClass: TranslateService, // Ensure TranslateService is available for your app
		},
		{
			provide: TranslateStore, // Add this provider for TranslateStore
			useClass: TranslateStore,
		},

		// TranslationService, // Your custom translation service
		provideRouter(
			routes,
			withInMemoryScrolling({
				anchorScrolling: 'enabled', // Aktiviert das Scrollen zu Fragmenten (#id)
				scrollPositionRestoration: 'enabled', // Stellt die Scrollposition bei Navigation wieder her
			}),
		),
		RouterModule,
		provideHttpClient(),
	],
};

// This registers the translation loader globally.
