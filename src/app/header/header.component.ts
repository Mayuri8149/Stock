import { Component,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router ,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  showHeaderTop: boolean = false;

  headerClass: string = 'fixed-top';

  constructor(private route: ActivatedRoute, private router: Router) {

    this.router.events.subscribe(event => {
      this.showHeaderTop = this.route.snapshot.routeConfig?.path === 'product-detail';
      // console.log(event);        
        if (event instanceof NavigationEnd) {
          // Check the current route and update the class accordingly
          this.updateHeaderClass();
        }

    })
  }

  isMainPage(): boolean {
    return this.router.url === '/product-detail';
  }
  
  goToMainPage() {
    // Navigate to the main page
    this.router.navigateByUrl('/');
  }

  updateHeaderClass() {
    const currentRoute = this.router.url;
    console.log(currentRoute);
    
    // Check if the current route is a product page or any other condition you want to check
    const isProductPage = currentRoute.includes('/product-detail');
  
    // Update the class based on the condition
    if (isProductPage) {
      // Add or remove classes based on your requirements
      this.headerClass = 'fixed-static';
      console.log("if")
    } else {
      // Default class when not on a product page
      console.log("else")
      this.headerClass = 'fixed-top';
    }
  }
  

  ngOnInit(): void{
    console.log('------In product detail comp-----')
  }
  
  onHamburgerClick(){
    this.toggleSidebar.emit();    
  }
}
