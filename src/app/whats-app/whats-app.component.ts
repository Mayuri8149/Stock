import { Component } from '@angular/core';

@Component({
  selector: 'app-whats-app',
  templateUrl: './whats-app.component.html',
  styleUrls: ['./whats-app.component.css']
})
export class WhatsAppComponent {

  whatsAppactive : boolean = false;

  whatsAppToggle(){
    this.whatsAppactive = !this.whatsAppactive
  }
}
