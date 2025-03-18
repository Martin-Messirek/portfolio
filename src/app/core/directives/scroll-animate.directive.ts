import { Directive, ElementRef, Input, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

/**
 * @directive ScrollAnimateDirective
 * @description
 * A directive that triggers animations when an element enters the viewport.
 * It uses the IntersectionObserver API to detect when the element is in view and
 * adds the specified animation class to the element to trigger the animation.
 * This directive supports a customizable root margin to control when the element
 * is considered "in view" before triggering the animation.
 *
 * The `rootMargin` input allows you to specify a margin around the viewport
 * for triggering the animation before the element is fully visible.
 */
@Directive({
	selector: '[appScrollAnimate]',
	standalone: true,
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
	@Input('appScrollAnimate') animationClass!: string;
	@Input() rootMargin: string = '-2px';
	private observer!: IntersectionObserver;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	/**
	 * Lifecycle hook that initializes the IntersectionObserver after the view is initialized.
	 * It starts observing the element for when it enters the viewport.
	 */
	ngAfterViewInit() {
		this.observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					this.renderer.addClass(this.el.nativeElement, this.animationClass);
					this.observer.disconnect();
				}
			},
			{ rootMargin: this.rootMargin },
		);
		this.observer.observe(this.el.nativeElement);
	}

	/**
	 * Lifecycle hook to disconnect the IntersectionObserver when the directive is destroyed.
	 * This prevents memory leaks by stopping the observer when it's no longer needed.
	 */
	ngOnDestroy() {
		if (this.observer) {
			this.observer.disconnect();
		}
	}
}
