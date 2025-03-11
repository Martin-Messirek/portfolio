import { Directive, ElementRef, Input, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
	selector: '[appScrollAnimate]',
	standalone: true,
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
	@Input('appScrollAnimate') animationClass!: string;
	@Input() rootMargin: string = '-2px';
	private observer!: IntersectionObserver;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

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

	ngOnDestroy() {
		if (this.observer) {
			this.observer.disconnect();
		}
	}
}
