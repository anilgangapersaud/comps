import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-views-home-component',
  standalone: true,
  imports: [ItemListComponent, StatisticsComponent, DividerComponent, CommonModule],
  templateUrl: './views-home-component.component.html',
  styleUrl: './views-home-component.component.css'
})
export class ViewsHomeComponentComponent {

  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews'}
  ];

  items = [
    {
      image: '/assets/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on'
    },
    {
      image: '/assets/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in'
    }
  ]

}
