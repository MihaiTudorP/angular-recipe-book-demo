import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  activeFeature = 'recipe';

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
    this.activeFeature = feature;
  }
}
