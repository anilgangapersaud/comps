import { Component } from '@angular/core';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { TimesDirective } from '../times.directive';
import { DividerComponent } from '../../shared/divider/divider.component';
import { SegmentComponent } from '../segment/segment.component';

@Component({
  selector: 'app-elements-home',
  standalone: true,
  imports: [PlaceholderComponent, TimesDirective, DividerComponent, SegmentComponent],
  templateUrl: './elements-home.component.html',
  styleUrl: './elements-home.component.css'
})
export class ElementsHomeComponent {

}
