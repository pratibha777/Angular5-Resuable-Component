import { Directive, OnInit, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[focusMe]'
})
export class FocusMeDirective implements OnInit {
  @Input('focusMe') isFocused: boolean;
  constructor(private hostElement: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    if (this.isFocused) {
      this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus');
    }
  }
}