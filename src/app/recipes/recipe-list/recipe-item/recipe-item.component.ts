import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe = new Recipe('', '', '');
  @Output() recipeSelected = new EventEmitter<Recipe>();
  ngOnInit(): void {
  }

  onSelect(): void{
    this.recipeSelected.emit(this.recipe);
  }
}
