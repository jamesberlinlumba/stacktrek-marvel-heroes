import { Component } from '@angular/core';
import { Heroes } from '../../Interfaces/heroes';
import { HEROES } from '../../Mock-data/mock-heroes'

@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.css']
})
export class HeroesListsComponent {
  hero: Heroes = {
    id: 1,
    name: 'Iron Man'
  }

  heroes = HEROES;

  selectedHero = this.hero;

  onSelect(hero:Heroes): void {
    this.selectedHero = hero;
  }

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
