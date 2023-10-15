import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

interface FeatureItem{
  name: String;
  isEnable?: Boolean;
  isTrue?: Boolean;
}

interface PlanDetail{
  plan: String;
  price: String;
  features: Array<FeatureItem>;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() planObj: PlanDetail | undefined;
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCheck);
  }
}
