import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() recipeShow = new EventEmitter<{ recipeShow: boolean }>();
  @Output() listShow = new EventEmitter<{ listShow: boolean }>();

  onRecipeClick(): void {
    this.recipeShow.emit({recipeShow: true});
  }

  onListClick(): void {
    this.listShow.emit({listShow: true});
  }
}
