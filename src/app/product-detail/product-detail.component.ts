import { Component } from '@angular/core';
// import { Popover } from 'bootstrap'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  mainImgSrc: string = '../../assets/img/img1.webp'
  current : number | null = null;
  emailPopupActive : boolean = false

  updateMainImg(newSrc:string,index:number) : void{
    console.log("change" , newSrc, "and index no is" , index);
    this.mainImgSrc = newSrc
    this.current = index
  }  

  isImageActiveClass(index:number): boolean {
    return this.current === index
  } 

  sidebarActive : boolean = false;
  ngOnInit(){
    console.log('------In product detail comp-----')
    // Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
    // .forEach(popovernode => new Popover(popovernode))
  }
  
  toggleSidebar(){
    // this.sidebarActive = !this.sidebarActive
    this.sidebarActive = true
  }

  emailPopupToggle(){
    this.emailPopupActive = !this.emailPopupActive
  }
  emailPopupCloseToggle(){
    this.emailPopupActive = false
  }

}