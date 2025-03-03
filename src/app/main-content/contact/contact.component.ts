import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverImageDirective } from '../../core/directives/hover-image.directive';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [TranslatePipe, CommonModule, FormsModule, RouterModule, HoverImageDirective],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
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

	// wasFocused: boolean = false;

	// onBlur() {
	// 	this.wasFocused = true;
	// }
	// isFocused: boolean = true;

	// onFocus() {
	// 	this.isFocused = true;
	// }

	// onBlur() {
	// 	this.isFocused = false;
	// }

	contactData = {
		name: '',
		email: '',
		message: '',
	};

	private _isPrivacyChecked: boolean = false;

	// Getter für Privacy-Checkbox
	get isPrivacyChecked(): boolean {
		return this._isPrivacyChecked;
	}

	// Setter für Privacy-Checkbox
	set isPrivacyChecked(value: boolean) {
		this._isPrivacyChecked = value;
	}

	// Der Getter gibt den aktuellen Wert zurück.
	// Der Setter aktualisiert den Wert, wenn sich der Status der Checkbox ändert.

	// Überprüft, ob das Name-Feld nicht leer ist
	get isNameFilled(): boolean {
		return this.contactData.name.trim().length > 2 && this.contactData.name.trim().length <= 30;
	}

	// Überprüft, ob das Email-Feld nicht leer ist
	get isEmailFilled(): boolean {
		const email = this.contactData.email.trim();
		if (email.length === 0) return false; // Falls leer, direkt false zurückgeben

		const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
		return emailRegEx.test(email) && email.length <= 50;
	}

	get isTextareaFilled(): boolean {
		const message = this.contactData.message.trim();
		if (message.length === 0) return false; // Falls leer, direkt false zurückgeben

		return message.length >= 5 && message.length <= 500;
	}

	get isFormPartiallyValid(): boolean {
		return this.isNameFilled && this.isEmailFilled && this.isTextareaFilled;
	}

	get isFormValid(): boolean {
		return this.isNameFilled && this.isEmailFilled && this.isTextareaFilled && this.isPrivacyChecked;
	}

	mailTest = true; // auf true setzen wenn auf server

	post = {
		endPoint: 'https://deineDomain.de/sendMail.php', // funktioniert im loca lHost nicht
		body: (payload: any) => JSON.stringify(payload),
		options: {
			headers: {
				'Content-Type': 'text/plain',
				responseType: 'text',
			},
		},
	};

	onSubmit(ngForm: NgForm) {
		console.log('Angular Form Submit funktioniert');
		console.log('Formulardaten gesendet:', this.contactData);

		if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
			// !this.mailTest und else if rausnehmen wenn auf server, ist nur Test
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
			// Testmodus
			ngForm.resetForm();
		}
	}
}
