import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverImageDirective } from '../../core/directives/hover-image.directive';
import { ScrollAnimateDirective } from '../../core/directives/scroll-animate.directive';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [TranslatePipe, CommonModule, FormsModule, RouterModule, HoverImageDirective, ScrollAnimateDirective],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss', './contact.responsive.scss'],
})
export class ContactComponent {
	http = inject(HttpClient);

	wasNameFocused: boolean = false;
	wasEmailFocused: boolean = false;
	wasMessageFocused: boolean = false;
	isSendBtnHovered: boolean = false;

	onBlur(field: string) {
		if (field === 'name') this.wasNameFocused = true;
		if (field === 'email') this.wasEmailFocused = true;
		if (field === 'message') this.wasMessageFocused = true;
	}

	contactData = {
		name: '',
		email: '',
		message: '',
	};

	private _isPrivacyChecked: boolean = false;

	get isPrivacyChecked(): boolean {
		return this._isPrivacyChecked;
	}

	set isPrivacyChecked(value: boolean) {
		this._isPrivacyChecked = value;
	}

	get isNameFilled(): boolean {
		const name = this.contactData.name?.trim();
		if (!name || name.length === 0) return false;
		return name.length > 2 && name.length <= 30;
	}

	get isEmailFilled(): boolean {
		const email = this.contactData.email?.trim();
		if (!email || email.length === 0) return false;

		const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
		return emailRegEx.test(email) && email.length <= 50;
	}

	get isTextareaFilled(): boolean {
		const message = this.contactData.message?.trim();
		if (!message || message.length === 0) return false;

		return message.length >= 5 && message.length <= 500;
	}

	get isFormPartiallyValid(): boolean {
		return this.isNameFilled && this.isEmailFilled && this.isTextareaFilled;
	}

	get isFormValid(): boolean {
		return this.isNameFilled && this.isEmailFilled && this.isTextareaFilled && this.isPrivacyChecked;
	}

	mailTest = false; // auf false setzen wenn auf server !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	post = {
		endPoint: 'https://martinmessirek.at/sendMail.php', // funktioniert im loca lHost nicht !!!!!!!!!!!!!!!!!!!
		body: (payload: any) => JSON.stringify(payload),
		options: {
			headers: {
				'Content-Type': 'text/plain',
				responseType: 'text',
			},
		},
	};

	onSubmit(ngForm: NgForm) {
		// console.log('Angular Form Submit funktioniert');
		// console.log('Formulardaten gesendet:', this.contactData);

		if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
			// !this.mailTest und else if rausnehmen wenn auf server, ist nur Test !!!!!!!!!!!!!!!!!!
			this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
				next: (response) => {
					ngForm.resetForm();
				},
				error: (error) => {
					console.error(error);
				},
				complete: () => console.info('send post complete'),
			});
		} else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
			console.log('Angular Form Submit funktioniert');
			console.log('Formulardaten gesendet:', this.contactData);
			// Testmodus !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			ngForm.resetForm();
		}
	}
}
