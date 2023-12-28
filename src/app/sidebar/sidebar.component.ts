import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  showSidebarPdp: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    console.log('------In product detail comp-----')
    // Subscribe to route changes to check the current route
    this.router.events.subscribe(() => {
      if (this.route.snapshot.routeConfig?.path === 'product-detail') {
        this.showSidebarPdp = false
      } else {
        this.showSidebarPdp = true
      }
      console.log(this.showSidebarPdp);

    });
  }

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
