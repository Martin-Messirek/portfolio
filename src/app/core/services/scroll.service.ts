import { Injectable, inject } from '@angular/core';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ScrollService {
	private renderer: Renderer2;

	constructor() {
		const rendererFactory = inject(RendererFactory2);
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	disableScroll() {
		this.renderer.addClass(document.body, 'no-scroll');
		// this.renderer.addClass(document.documentElement, 'no-scroll');
		// this.renderer.setStyle(document.body, 'overscroll-behavior', 'none');
		// this.renderer.setStyle(document.documentElement, 'overscroll-behavior', 'none');
		// this.renderer.setStyle(document.documentElement, '::-webkit-scrollbar', 'width: 0');
		// this.renderer.setStyle(document.documentElement, 'scrollbar-width', 'none');
		// this.renderer.setStyle(document.body, 'overflow', 'hidden');
		// this.renderer.setStyle(document.documentElement, 'overflow', 'hidden'); //  !!
		// document.documentElement.style.setProperty('--scrollbar-thumb', 'var(--bg-color)');
		// document.documentElement.style.setProperty('--scrollbar-thumb-hover', 'var(--bg-color)');
		// document.documentElement.style.setProperty('--scrollbar-cursor', 'default');
		// document.documentElement.style.setProperty('scrollbar-color', 'var(--bg-color)');
	}

	enableScroll() {
		this.renderer.removeClass(document.body, 'no-scroll');
		// this.renderer.removeClass(document.documentElement, 'no-scroll');
		// this.renderer.removeStyle(document.body, 'overscroll-behavior');
		// this.renderer.removeStyle(document.documentElement, 'overscroll-behavior');
		// // this.renderer.removeStyle(document.documentElement, '::-webkit-scrollbar');
		// this.renderer.removeStyle(document.documentElement, 'scrollbar-width');
		// this.renderer.removeStyle(document.body, 'overflow');
		// this.renderer.removeStyle(document.documentElement, 'overflow');
		// document.documentElement.style.removeProperty('--scrollbar-thumb');
		// document.documentElement.style.removeProperty('--scrollbar-thumb-hover');
		// document.documentElement.style.removeProperty('--scrollbar-cursor');
		// document.documentElement.style.removeProperty('scrollbar-color');
	}
}
