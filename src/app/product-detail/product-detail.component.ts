import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  sidebarActive : boolean = false;
  ngOnInit(){
    console.log('------In product detail comp-----')
  }
  
  toggleSidebar(){
    // this.sidebarActive = !this.sidebarActive
    this.sidebarActive = true
  }
}
