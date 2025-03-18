import { Directive, ElementRef, Renderer2, HostListener, OnDestroy } from '@angular/core';

/**
 * A directive that controls the hover effect timing for touch interactions.
 *
 * This directive listens for the `touchstart` event on the host element. Upon touching the element, it temporarily removes the `hover-inactive` class,
 * allowing the hover effect to be triggered. After a short timeout (360ms), the `hover-inactive` class is added again to prevent further hover interactions.
 * This directive listens for the `touchstart` event on the host element. Upon touching the element, it temporarily removes
 * the `hover-inactive` class, allowing the hover effect to be triggered.
 * After a short timeout (360ms), the `hover-inactive` class is added again to prevent the element from
 * remaining in the hover state.
 *
 */
@Directive({
	selector: '[appTimedHover]',
	standalone: true,
})
export class TimedHoverDirective implements OnDestroy {
	private timeout: any;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	/**
	 * HostListener for `touchstart` event.
	 *
	 * This method is triggered when a user touches the element.
	 * It removes the `hover-inactive` class, allowing hover effects.
	 * A timeout is set to add the `hover-inactive` class back after 360ms.
	 *
	 * @param event The touch event that is triggered on the host element.
	 */
	@HostListener('touchstart', ['$event'])
	onTouchStart(event: TouchEvent) {
		this.renderer.removeClass(this.el.nativeElement, 'hover-inactive');
		this.timeout = setTimeout(() => {
			this.renderer.addClass(this.el.nativeElement, 'hover-inactive');
		}, 360);
	}

	ngOnDestroy() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}
}
