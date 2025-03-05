import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ProjectComponent } from './project/project.component';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-portfolio',
	standalone: true,
	imports: [ProjectComponent, TranslatePipe, CommonModule],
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, OnDestroy {
	projects: any[] = [];
	private langChangeSubscription!: Subscription;

	constructor(private translateService: TranslateService) {}

	ngOnInit(): void {
		this.loadProjects();

		this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
			this.loadProjects();
		});
	}

	private loadProjects(): void {
		this.projects = this.translateService.instant('projects');
	}

	ngOnDestroy(): void {
		if (this.langChangeSubscription) {
			this.langChangeSubscription.unsubscribe();
		}
	}
}
