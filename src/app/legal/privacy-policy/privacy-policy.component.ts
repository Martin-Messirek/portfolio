import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
	selector: 'app-privacy-policy',
	standalone: true,
	imports: [TranslatePipe, CommonModule],
	templateUrl: './privacy-policy.component.html',
	styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {}
