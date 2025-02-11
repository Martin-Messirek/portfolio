import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './legal/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';

export const routes: Routes = [
	{ path: '', component: MainContentComponent },
	{ path: 'legal', component: LegalNoticeComponent },
	{ path: 'privacy', component: PrivacyPolicyComponent },
];
