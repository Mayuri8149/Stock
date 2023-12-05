import { Component,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  showHeaderTop: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void{
    console.log('------In product detail comp-----')
     // Subscribe to route changes to check the current route
     this.router.events.subscribe(() => {
      this.showHeaderTop = this.route.snapshot.routeConfig?.path === 'product-detail';
      console.log(this.showHeaderTop);
      
    });
  }

  onHamburgerClick(){
    this.toggleSidebar.emit();    
  }
}
