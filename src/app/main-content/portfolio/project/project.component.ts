import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';

@Component({
	selector: 'app-project',
	standalone: true,
	imports: [CommonModule, TranslatePipe, ScrollAnimateDirective],
	templateUrl: './project.component.html',
	styleUrl: './project.component.scss',
})
export class ProjectComponent {
	@Input() TITLE!: string;
	@Input() TECHNOLOGIES!: string;
	@Input() DESCRIPTION!: string;
	@Input() liveLink!: string;
	@Input() githubLink!: string;
	@Input() imageSrc!: string;
	@Input() reverseRow: boolean = false;
}
