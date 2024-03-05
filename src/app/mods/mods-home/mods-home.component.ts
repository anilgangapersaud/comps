import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [ ModalComponent, SharedModule, CommonModule, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {

  modalOpen = false; 
  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is' },
    { title: 'What does an orange taste like?', content: 'An orange taste like an orange'},
    { title: 'What color is that car?', content: 'The cat is an orange colour'}
  ]

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
