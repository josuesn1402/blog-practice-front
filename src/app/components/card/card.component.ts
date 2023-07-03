import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title?: string;
  @Input() imageUrl?: string;
  @Input() content?: string;
}
