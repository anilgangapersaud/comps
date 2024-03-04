import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
  standalone: true
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(lines: number) {
    this.viewContainer.clear();

    for (let i = 0; i < lines; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
