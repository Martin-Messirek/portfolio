import { Directive, ElementRef, Renderer2, HostListener, Input, AfterViewInit } from '@angular/core';

@Directive({
	selector: '[appResizeImage]',
	standalone: true,
})
export class ResizeImageDirective implements AfterViewInit {
	private defaultImage: HTMLElement | null = null;
	private resizeImage: HTMLElement | null = null;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	/**
	 * @method ngOnInit
	 * @description
	 * Beim Initialisieren wird die Direktive die <img> Elemente im Host-Element finden.
	 * Es wird erwartet, dass es genau zwei Bilder gibt:
	 * - Das erste Bild ist das Standardbild (defaultImage).
	 * - Das zweite Bild ist das Bild für kleinere Bildschirmgrößen (resizeImage), das anfänglich versteckt ist.
	 */
	ngOnInit() {
		const images = this.el.nativeElement.querySelectorAll('img');
		if (images.length === 2) {
			this.setupImageElements(images);
		}
	}

	ngAfterViewInit(): void {
		this.updateImageSrc();
	}

	setupImageElements(images: NodeListOf<HTMLImageElement>): void {
		this.defaultImage = images[0];
		this.resizeImage = images[1];
		this.renderer.setStyle(this.resizeImage, 'display', 'none'); // Verstecke das Resize-Bild initial
	}

	/**
	 * @method onResize
	 * @description
	 * Wenn die Fenstergröße geändert wird, wird überprüft, ob die Fensterbreite kleiner oder größer als 1600px ist.
	 * Je nach Zustand wird das Standardbild oder das Resize-Bild angezeigt.
	 */
	@HostListener('window:resize', ['$event'])
	onResize(event: Event): void {
		this.updateImageSrc();
	}

	private updateImageSrc(): void {
		if (window.innerWidth <= 1600) {
			if (this.defaultImage && this.resizeImage) {
				this.renderer.setStyle(this.defaultImage, 'display', 'none');
				this.renderer.setStyle(this.resizeImage, 'display', 'inline');
			}
		} else {
			if (this.defaultImage && this.resizeImage) {
				this.renderer.setStyle(this.defaultImage, 'display', 'inline');
				this.renderer.setStyle(this.resizeImage, 'display', 'none');
			}
		}
	}
}
