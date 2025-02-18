import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverImageDirective } from '../../core/directives/hover-image.directive';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [TranslatePipe, HoverImageDirective],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
