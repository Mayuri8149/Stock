import { Component ,HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'deadstock';
  sidebarActive : boolean = false;
  backTopActive : boolean = false;
  show : boolean = false;
  whatsAppactive : boolean = false;
  showButton = false;

  constructor(private router: Router) { }

  feedBackToggle(){
    this.show = !this.show
  }
  whatsAppToggle(){
    this.whatsAppactive = !this.whatsAppactive
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and toggle the button visibility
    // this.showButton = window.pageYOffset > 400;
    this.backTopActive = window.pageYOffset > 400;
  }

  scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleSidebar(){
    // this.sidebarActive = !this.sidebarActive
    this.sidebarActive = true
  }

  closeSidebar(){
    this.sidebarActive = false
  }
  productClick(){
    console.log('In product click---')
    this.router.navigate(['/product-detail'])
  }
}
