/**
 * @directive HoverImageDirective
 *
 * @description
 * This directive handles hover effects on a container element that contains two images and optionally a pop-up text.
 * It expects the container (with the directive applied) to include:
 *  - A "default" image (defaultImage)
 *  - A "hover" image (hoverImage) that is initially hidden (opacity 0)
 *  - Optionally, a pop-up text element with class "pop-up" that is also initially hidden.
 *
 * Additionally, when the user hovers over the container and the event target has the class "icon-container-located",
 * the directive searches for an element with the class ".ubication" in the closest parent with the class
 * ".ubication-container" and applies a transform (translateY) to simulate a "lifting" effect.
 *
 * The directive uses HostListener to handle "mouseenter" and "mouseleave" events and applies style changes
 * using Renderer2.
 *
 */
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appHoverImage]',
	standalone: true,
})
export class HoverImageDirective {
	private defaultImage: HTMLElement | null = null;
	private hoverImage: HTMLElement | null = null;
	private hoverText: HTMLElement | null = null;
	private hoverElement: HTMLElement | null = null;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	/**
	 * @method ngOnInit
	 * @description
	 * On initialization, the directive queries for <img> elements within its host.
	 * It expects exactly two images:
	 * - The first image is treated as the defaultImage.
	 * - The second image is treated as the hoverImage and is initially hidden (opacity set to 0).
	 *
	 * Additionally, it checks for any <p> elements with the class "pop-up" to be used as hoverText,
	 * and stores the first element with class ".hover" for later use.
	 */
	ngOnInit() {
		const images = this.el.nativeElement.querySelectorAll('img');
		if (images.length === 2) {
			this.setupImageElements(images);
		}

		const textElements = this.el.nativeElement.querySelectorAll('p.pop-up');
		if (textElements.length === 1) {
			this.setupTextElement(textElements);
		}

		this.hoverElement = this.el.nativeElement.querySelector('.hover');
	}

	setupImageElements(images: NodeListOf<HTMLImageElement>): void {
		this.defaultImage = images[0];
		this.hoverImage = images[1];
		this.renderer.setStyle(this.hoverImage, 'opacity', '0');
	}

	setupTextElement(textElements: NodeListOf<HTMLElement>): void {
		this.hoverText = textElements[0];
		this.renderer.setStyle(this.hoverText, 'visibility', 'hidden');
	}

	/**
	 * @method onHover
	 * @param {MouseEvent} event - The mouse event triggered when the pointer enters the host element.
	 * @description
	 * When the user hovers over the host element:
	 * 1. If the event target has the class "icon-container-located", the directive searches for an element
	 *    with the class ".ubication" in the closest parent with class ".ubication-container". If found,
	 *    it applies a CSS transform (translateY(0)) with a transition to simulate a "lift" effect.
	 * 2. If an element with the class ".continuous-learning" exists and the window width is greater than 768px,
	 *    the hoverText is made visible.
	 * 3. The defaultImage is hidden (opacity set to 0) and the hoverImage is shown (opacity set to 1).
	 */
	@HostListener('pointerenter', ['$event'])
	onPointerEnter(event: PointerEvent) {
		if ((event.target as HTMLElement).classList.contains('icon-container-located')) {
			this.handleUbicationImageHover();
		}

		if (this.el.nativeElement.querySelector('.continuous-learning')) {
			if (window.innerWidth > 768 && this.hoverText) {
				this.handleHoverTextDisplay();
			}
		}
		if (this.defaultImage && this.hoverImage) {
			this.handleHoverImageDisplay();
		}
	}

	handleUbicationImageHover(): void {
		const ubicationImg = this.el.nativeElement.closest('.ubication-container')?.querySelector('.ubication');
		if (ubicationImg) {
			this.renderer.setStyle(ubicationImg, 'transform', 'translateY(-8px)');
			this.renderer.setStyle(ubicationImg, 'transition', 'transform 0.195s ease-out');
		}
	}

	handleHoverTextDisplay(): void {
		this.renderer.setStyle(this.hoverText, 'display', 'block');
		setTimeout(() => {
			this.renderer.setStyle(this.hoverText, 'visibility', 'visible');
			this.renderer.setStyle(this.hoverText, 'opacity', '1');
		}, 100);
	}

	handleHoverImageDisplay(): void {
		this.renderer.setStyle(this.defaultImage, 'opacity', '0');
		this.renderer.setStyle(this.hoverImage, 'opacity', '1');
	}

	/**
	 * @method onLeave
	 * @param {MouseEvent} event - The mouse event triggered when the pointer leaves the host element.
	 * @description
	 * When the user leaves the host element:
	 * 1. The directive finds the `.ubication` element in the nearest `.ubication-container` and resets its
	 *    transform to `translateY(12px)`. This is done every time the mouse leaves, regardless of whether
	 *    `translateY(12px)` is already applied. This simplifies the logic by always applying the default
	 *    transform value, even if it's already in place.
	 *    The transform reset happens consistently even when the hover was not related to the `.ubication` image,
	 *    making the behavior predictable and easy to manage.
	 * 2. If the mouse leaves the hover area (i.e., it does not enter an element within the stored hoverElement),
	 *    and if the window width is greater than 768px, the hoverText is hidden.
	 * 3. The defaultImage is made visible again and the hoverImage is hidden.
	 */
	@HostListener('pointerleave', ['$event'])
	onPointerLeave(event: PointerEvent) {
		if (event.pointerType === 'touch' || event.pointerType === 'pen') {
			this.handleTouchEvents();
		} else {
			this.handleImages();
			if (this.hoverElement && !this.hoverElement.contains(event.relatedTarget as Node)) {
				if (window.innerWidth > 768 && this.hoverText) {
					this.handleHoverTextHide();
				}
			}
		}
	}

	handleTouchEvents() {
		setTimeout(() => {
			this.handleImages();
		}, 260);
		setTimeout(() => {
			this.handleHoverTextHide();
		}, 1200);
	}

	handleImages() {
		this.handleUbicationImageReset();
		if (this.defaultImage && this.hoverImage) {
			this.handleHoverImageReset();
		}
	}

	handleUbicationImageReset(): void {
		const ubicationImg = this.el.nativeElement.closest('.ubication-container')?.querySelector('.ubication');
		if (ubicationImg) {
			this.renderer.setStyle(ubicationImg, 'transform', 'translateY(4px)');
		}
	}

	handleHoverTextHide(): void {
		this.renderer.setStyle(this.hoverText, 'visibility', 'hidden');
		this.renderer.setStyle(this.hoverText, 'opacity', '0');
		setTimeout(() => {
			this.renderer.setStyle(this.hoverText, 'display', 'none');
		}, 100);
	}

	handleHoverImageReset(): void {
		this.renderer.setStyle(this.defaultImage, 'opacity', '1');
		this.renderer.setStyle(this.hoverImage, 'opacity', '0');
	}
}
