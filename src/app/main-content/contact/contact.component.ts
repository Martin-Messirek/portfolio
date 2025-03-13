import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverImageDirective } from '../../core/directives/hover-image.directive';
import { ScrollAnimateDirective } from '../../core/directives/scroll-animate.directive';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [TranslatePipe, CommonModule, FormsModule, RouterModule, HoverImageDirective, ScrollAnimateDirective],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss', './contact.responsive.scss'],
})
export class ContactComponent {
	private scrollService = inject(ScrollService);
	http = inject(HttpClient);

	wasNameFocused: boolean = false;
	wasEmailFocused: boolean = false;
	wasMessageFocused: boolean = false;
	isSendBtnHovered: boolean = false;

	successMessageVisible: boolean = false;
	submittingMessage: boolean = false;
	messageFailed: boolean = false;

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

	showMessageSubmissionScreen() {
		this.submittingMessage = true;
		this.scrollService.disableScroll();
	}

	showSuccessMessage() {
		this.submittingMessage = false;
		this.successMessageVisible = true;
		setTimeout(() => {
			this.successMessageVisible = false;
			this.scrollService.enableScroll();
		}, 5000);
	}

	showFailureMessage() {
		this.submittingMessage = false;
		this.messageFailed = true;
		setTimeout(() => {
			this.messageFailed = false;
			this.scrollService.enableScroll();
		}, 5000);
	}

	clearUserActivity() {
		this.wasNameFocused = false;
		this.wasEmailFocused = false;
		this.wasMessageFocused = false;
		this.isSendBtnHovered = false;
	}

	clearForm(ngForm: NgForm) {
		ngForm.resetForm();
		this.clearUserActivity();
	}

	post = {
		endPoint: 'https://martinmessirek.at/sendMail.php',
		body: (payload: any) => JSON.stringify(payload),
		options: {
			headers: {
				'Content-Type': 'text/plain',
				responseType: 'text',
			},
		},
	};

	mailTest = true;

	onSubmit(ngForm: NgForm) {
		this.showMessageSubmissionScreen();

		if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
			this.handleSubmission(ngForm);
		} else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
			this.mailTestSubmission(ngForm);
		}
	}

	handleSubmission(ngForm: NgForm): void {
		this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
			next: () => {
				this.showSuccessMessage();
				this.clearForm(ngForm);
			},
			error: (error) => {
				console.error('Error sending message:', error);
				this.showFailureMessage();
			},
			complete: () => console.info('Send post complete'),
		});
	}

	mailTestSubmission(ngForm: NgForm): void {
		setTimeout(() => {
			this.showSuccessMessage();
			this.showFailureMessage();
			this.clearForm(ngForm);
		}, 3000);
	}
}
