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
		// Projekte initial laden
		this.loadProjects();

		// Bei Sprachwechsel die Projekte neu laden
		this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
			this.loadProjects();
		});
	}

	private loadProjects(): void {
		// Hier wird das "projects"-Objekt aus den Übersetzungsdaten synchron abgerufen
		this.projects = this.translateService.instant('projects');
	}

	ngOnDestroy(): void {
		if (this.langChangeSubscription) {
			this.langChangeSubscription.unsubscribe();
		}
	}
}
