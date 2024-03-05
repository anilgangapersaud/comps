import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [ ModalComponent, SharedModule, CommonModule ],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {

  modalOpen = false; 


  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
