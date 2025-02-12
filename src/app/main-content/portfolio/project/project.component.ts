import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
	selector: 'app-project',
	standalone: true,
	imports: [CommonModule, TranslatePipe],
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
}
