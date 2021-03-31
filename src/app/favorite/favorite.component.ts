import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { threadId } from 'node:worker_threads';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  @Input() isFavorite: boolean; //  take it from server

  @Output() change = new EventEmitter();


  // Αν η this.isFavorite = true, μολις πατηθει, θα γινει false
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
  constructor() { }

  ngOnInit(): void {
      
  }
}
