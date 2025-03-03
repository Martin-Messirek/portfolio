import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverImageDirective } from '../../core/directives/hover-image.directive';

@Component({
	selector: 'app-about-me',
	standalone: true,
	imports: [TranslatePipe, HoverImageDirective],
	templateUrl: './about-me.component.html',
	styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
