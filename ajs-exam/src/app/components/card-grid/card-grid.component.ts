import { Component, OnInit } from '@angular/core';
import {TechCard} from '../../data/tech-data';
import {TECH_DATA} from '../../models/tech-card.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-card-grid',
  standalone: false,
  templateUrl: 'card-grid.component.html',
  styleUrls: ['card-grid.component.css']
})
export class CardGridComponent implements OnInit {
  cards: TechCard[] = [];
  filteredCards: TechCard[] = [];
  searchText = '';
  categoryText = '';

  ngOnInit() {
    this.cards = TECH_DATA;
    this.filteredCards = this.cards;
  }

  filterData() {
    const text = this.searchText.toLowerCase();
    const cat = this.categoryText.toLowerCase();

    this.filteredCards = this.cards.filter(card =>
      card.title.toLowerCase().includes(text) &&
      card.category.toLowerCase().includes(cat)
    );
  }
}
