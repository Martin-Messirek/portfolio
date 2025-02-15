import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverImageDirective } from '../../core/directives/hover-image.directive';

@Component({
	selector: 'app-above-the-fold',
	standalone: true,
	imports: [TranslatePipe, HoverImageDirective],
	templateUrl: './above-the-fold.component.html',
	styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {}
