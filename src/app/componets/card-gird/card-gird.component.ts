import { Component, OnInit } from '@angular/core';
import { TECH_DATA } from '../../data/tech-data';
import { TechCard } from '../../models/tech-card.model';

@Component({
  selector: 'app-card-grid',
  templateUrl: 'card-gird.component.html',
  styleUrls: ['card-gird.component.css']
})

export class CardGridComponent implements OnInit {
  cards: TechCard[] = [];
  filteredCards: TechCard[] = [];
  searchText : string = '';
  categoryText : string = '';

  ngOnInit() {
    this.cards = TECH_DATA;
    this.filteredCards = [...this.filteredCards];
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
