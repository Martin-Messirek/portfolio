import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverImageDirective } from '../../core/directives/hover-image.directive';
import { ScrollAnimateDirective } from '../../core/directives/scroll-animate.directive';
import { TimedHoverDirective } from '../../core/directives/timed-hover.directive';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [TranslatePipe, HoverImageDirective, ScrollAnimateDirective, TimedHoverDirective],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
