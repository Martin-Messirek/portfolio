import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private translationService: TranslationService) {}

  toggleLanguage() {
    this.translationService.toggleLanguage();
  }
}
