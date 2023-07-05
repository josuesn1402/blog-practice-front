import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() message: string = '';
}
