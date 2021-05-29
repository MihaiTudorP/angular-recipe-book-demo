import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef: ElementRef | undefined;
  @Output() elementSaved = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  saveElement(): void {
    if (this.nameInputRef && this.amountInputRef){
      this.elementSaved.emit(
        new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
    }
  }
}
