import { Component, HostListener, ElementRef, ViewChild } from "@angular/core";
// import { Popover } from 'bootstrap'
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent {
  mainImgSrc: string = "../../assets/img/img1.webp";
  current: number | null = null;
  emailPopupActive: boolean = false;
  count: number = 1;
  stickyHeaderActive: boolean = false;
  // activeSection: string = '';

  constructor(private sanitizer: DomSanitizer) {}
  getSafeVideoUrl(videoId: string): SafeResourceUrl {
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  @ViewChild("specificationTab", { static: false }) specificationTab:
    | ElementRef
    | undefined;

  scrollToSpecification() {
    if (this.specificationTab) {
      // Scroll to the SPECIFICATION tab
      this.specificationTab.nativeElement.scrollIntoView({
        behavior: "smooth",
      });

      // Set the SPECIFICATION tab as active
      document.getElementById("specification-tab")?.classList.add("active");
      document.getElementById("dscription-tab")?.classList.remove("active");

      document.getElementById("specification")?.classList.add("show", "active");
      document.getElementById("dscription")?.classList.remove("show", "active");

      // Trigger click on the SPECIFICATION tab button
      document.getElementById("specification-tab")?.click();
    }
  }
  // stick: number | null = null;

  // identify(index: number): boolean {
  //   // console.log("index", index === this.stick);
  //   return this.stick === index;
  // }
  // updatesticky(index: number): void {
  //   this.stick = index;
  // }

  updateMainImg(newSrc: string, index: number): void {
    // console.log("change" , newSrc, "and index no is" , index);
    this.mainImgSrc = newSrc;
    this.current = index;
  }

  isImageActiveClass(index: number): boolean {
    return this.current === index;
  }

  sidebarActive: boolean = false;
  ngOnInit() {
    console.log("------In product detail comp-----");
    // Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
    // .forEach(popovernode => new Popover(popovernode))
  }

  toggleSidebar() {
    // this.sidebarActive = !this.sidebarActive
    this.sidebarActive = true;
  }

  emailPopupToggle() {
    this.emailPopupActive = !this.emailPopupActive;
  }
  emailPopupCloseToggle() {
    this.emailPopupActive = false;
  }

  increment() {
    this.count++;
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  scrollTO(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  setActive(section: string): void {
    // this.activeSection = section

    // console.log(section);

    const links = document.querySelectorAll(".sticky_header_link a");
    links.forEach((link) => link.classList.remove("active"));

    const activeLink = document.getElementById(section);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.stickyHeaderActive = window.pageYOffset > 100;
  }
}
