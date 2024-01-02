import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.css']
})
export class BackToTopButtonComponent {
  backTopActive : boolean = false;

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
}
