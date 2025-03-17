import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverImageDirective } from '../../core/directives/hover-image.directive';
import { ScrollAnimateDirective } from '../../core/directives/scroll-animate.directive';
import { TimedHoverDirective } from '../../core/directives/timed-hover.directive';

@Component({
	selector: 'app-about-me',
	standalone: true,
	imports: [TranslatePipe, HoverImageDirective, ScrollAnimateDirective, TimedHoverDirective],
	templateUrl: './about-me.component.html',
	styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
