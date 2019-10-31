import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://image.shutterstock.com/image-photo/high-angle-view-manhattan-new-600w-222155194.jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://image.shutterstock.com/image-photo/beautiful-view-traditional-french-country-260nw-1036146931.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://image.shutterstock.com/image-photo/tree-house-fog-260nw-1211127625.jpg',
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
