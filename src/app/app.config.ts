import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, RouterModule } from '@angular/router';
import { TranslateService, TranslateLoader, TranslateStore, provideTranslateService } from '@ngx-translate/core';
import { routes } from './app.routes';
import { CustomTranslateLoader } from './core/custom-translate-loader';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
	providers: [
		provideTranslateService({
			defaultLanguage: 'en',
		}),
		{
			provide: TranslateLoader,
			useClass: CustomTranslateLoader,
		},
		{
			provide: TranslateService,
			useClass: TranslateService,
		},
		{
			provide: TranslateStore,
			useClass: TranslateStore,
		},

		provideRouter(
			routes,
			withInMemoryScrolling({
				anchorScrolling: 'enabled',
				scrollPositionRestoration: 'enabled',
			}),
		),
		RouterModule,
		provideHttpClient(),
	],
};
