import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [TranslatePipe, CommonModule, FormsModule],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	nameValue: string = ''; // für das Name-Feld
	emailValue: string = ''; // für das Email-Feld

	textareaValue: string = ''; // für das Textarea

	// Überprüft, ob das Name-Feld nicht leer ist
	get isNameFilled(): boolean {
		return this.nameValue.trim().length > 2 && this.nameValue.trim().length <= 30;
	}

	// Überprüft, ob das Email-Feld nicht leer ist
	get isEmailFilled(): boolean {
		const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
		return emailRegEx.test(this.emailValue.trim()) && this.emailValue.trim().length <= 50;
	}

	get isTextareaFilled(): boolean {
		return this.textareaValue.trim().length >= 5 && this.textareaValue.trim().length <= 500;
	}
}
