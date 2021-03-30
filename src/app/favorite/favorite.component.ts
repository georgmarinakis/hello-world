import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  isFavorite: boolean; //  take it from server

  // Αν η this.isFavorite = true, μολις πατηθει, θα γινει false
  onClick() {
    this.isFavorite = !this.isFavorite;
  }
  constructor() { }

  ngOnInit(): void {
      
  }
}
