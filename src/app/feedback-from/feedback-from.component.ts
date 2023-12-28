import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-from',
  templateUrl: './feedback-from.component.html',
  styleUrls: ['./feedback-from.component.css']
})
export class FeedbackFromComponent {
  show : boolean = false;
  feedBackToggle(){
    this.show = !this.show
  }
}
