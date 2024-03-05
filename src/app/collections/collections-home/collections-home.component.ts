import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, TableComponent, DividerComponent, CommonModule, TabsComponent],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {

  partOfLink = 'hi';

  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill',  age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true  }
  ];

  headers = [
    { key: 'employed', label: 'Has a Job?'},
    { key: 'name', label: 'Name' },
    { key: 'age', label:  'Age'  },
    { key: 'job', label:  'Job'  }
  ]

}
