import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appHoverImage]', // Selector, den du später im HTML verwendest
	standalone: true,
})
export class HoverImageDirective {
	private defaultImage: HTMLElement | null = null;
	private hoverImage: HTMLElement | null = null;
	private hoverText: HTMLElement | null = null;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		const images = this.el.nativeElement.querySelectorAll('img');
		if (images.length === 2) {
			this.defaultImage = images[0];
			this.hoverImage = images[1];
			this.renderer.setStyle(this.hoverImage, 'opacity', '0'); // Hover-Bild ausblenden
		}

		// Überprüfen, ob ein Text zum Hovern vorhanden ist
		const textElements = this.el.nativeElement.querySelectorAll('p.pop-up');
		if (textElements.length === 1) {
			this.hoverText = textElements[0];
			this.renderer.setStyle(this.hoverText, 'visibility', 'hidden'); // Text ausblenden
		}
	}
	@HostListener('mouseenter') onHover() {
		// Überprüfen, ob der Mauszeiger das .continuous-learning-Element berührt
		if (this.el.nativeElement.querySelector('.continuous-learning')) {
			if (this.hoverText) {
				this.renderer.setStyle(this.hoverText, 'visibility', 'visible'); // Text einblenden
				this.renderer.setStyle(this.hoverText, 'opacity', '1');
			}
		}
		if (this.defaultImage && this.hoverImage) {
			this.renderer.setStyle(this.defaultImage, 'opacity', '0');
			this.renderer.setStyle(this.hoverImage, 'opacity', '1');
		}
	}
	@HostListener('mouseleave') onLeave() {
		if (this.hoverText) {
			this.renderer.setStyle(this.hoverText, 'visibility', 'hidden'); // Text ausblenden
			this.renderer.setStyle(this.hoverText, 'opacity', '0');
		}
		if (this.defaultImage && this.hoverImage) {
			this.renderer.setStyle(this.defaultImage, 'opacity', '1');
			this.renderer.setStyle(this.hoverImage, 'opacity', '0');
		}
	}
}
