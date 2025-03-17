import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverImageDirective } from '../../core/directives/hover-image.directive';
import { TimedHoverDirective } from '../../core/directives/timed-hover.directive';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [TranslatePipe, RouterModule, HoverImageDirective, TimedHoverDirective],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {}
