import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ElementsModule, CollectionsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comps';
}
