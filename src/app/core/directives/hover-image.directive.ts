import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appHoverImage]', // Selector, den du später im HTML verwendest
	standalone: true,
})
export class HoverImageDirective {
	private defaultImage: HTMLElement | null = null;
	private hoverImage: HTMLElement | null = null;
	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		const images = this.el.nativeElement.querySelectorAll('img');
		if (images.length === 2) {
			this.defaultImage = images[0];
			this.hoverImage = images[1];
			this.renderer.setStyle(this.hoverImage, 'opacity', '0'); // Hover-Bild ausblenden
		}
	}
	@HostListener('mouseenter') onHover() {
		if (!this.defaultImage || !this.hoverImage) return;
		this.renderer.setStyle(this.defaultImage, 'opacity', '0');
		this.renderer.setStyle(this.hoverImage, 'opacity', '1');
	}

	@HostListener('mouseleave') onLeave() {
		if (!this.defaultImage || !this.hoverImage) return;
		this.renderer.setStyle(this.defaultImage, 'opacity', '1');
		this.renderer.setStyle(this.hoverImage, 'opacity', '0');
	}
}
