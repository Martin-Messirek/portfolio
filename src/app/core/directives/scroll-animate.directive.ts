import { Directive, ElementRef, Input, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
	selector: '[appScrollAnimate]',
	standalone: true,
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
	@Input('appScrollAnimate') animationClass!: string;
	@Input() rootMargin: string = '-2px';
	// @Input() threshold: number = 0.5; // Standard: 20% Sichtbarkeit nötig
	// options = { rootMargin: '-2px' };
	private observer!: IntersectionObserver;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngAfterViewInit() {
		this.observer = new IntersectionObserver(
			([entry]) => {
				// console.log('Intersection Ratio 1:', entry.intersectionRatio);
				// console.log(this.threshold);

				// if (entry.intersectionRatio > 0.5 && entry.intersectionRatio < 1) {
				// if (entry.intersectionRatio > 0.5) {
				// if (entry.intersectionRatio > this.options.threshold) {
				console.log(this.observer);

				if (entry.isIntersecting) {
					// console.log('Intersection Ratio 2:', entry.intersectionRatio);
					this.renderer.addClass(this.el.nativeElement, this.animationClass);
					console.log(this.el.nativeElement, this.animationClass);

					this.observer.disconnect(); // Animation nur einmal auslösen
				}
			},
			{ rootMargin: this.rootMargin },
			// this.options,
			// { threshold: 0.6 },
			// { threshold: this.threshold },
		);

		this.observer.observe(this.el.nativeElement);
	}

	ngOnDestroy() {
		if (this.observer) {
			this.observer.disconnect();
		}
	}
}
