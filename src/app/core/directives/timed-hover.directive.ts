import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
	selector: '[appTimedHover]',
	standalone: true,
})
export class TimedHoverDirective {
	private timeout: any;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	@HostListener('pointerenter', ['$event'])
	onPointerEnter(event: PointerEvent) {
		if (event.pointerType === 'touch') {
			this.timeout = setTimeout(() => this.removeHoverEffect(), 360);
		}
	}

	@HostListener('contextmenu', ['$event'])
	onRightClick(event: MouseEvent): void {
		event.preventDefault();
	}

	private removeHoverEffect() {
		// Entferne den Hover-Effekt
		this.renderer.removeClass(this.el.nativeElement, 'hover');
	}
}
