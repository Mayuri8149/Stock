import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isActive: boolean = false;

  // @Input() isActiveLi: boolean = false;

  @Output() cancelClicked = new EventEmitter<void>();

  activeItem: number | null = null;

  setActive(itemNumber: number) {
    if (this.activeItem === itemNumber) {
      this.activeItem = null; // Clicking the active item again removes the active class
    } else {
      this.activeItem = itemNumber;
    }
  }

  onCancelClick() {
    this.cancelClicked.emit();
  }
}
