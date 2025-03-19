import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
	providers: [...appConfig.providers],
})
	// .then(() => console.log('Angular ist bereit'))
	.catch((err) => console.error(err));

document.addEventListener('DOMContentLoaded', () => {
	const userAgent = navigator.userAgent.toLowerCase();
	const isFirefox = userAgent.includes('firefox');
	const isWebKit = userAgent.includes('chrome') || userAgent.includes('safari');

	if (isFirefox) {
		document.documentElement.setAttribute('data-browser', 'firefox');
	} else if (isWebKit) {
		document.documentElement.setAttribute('data-browser', 'webkit');
	}
});
