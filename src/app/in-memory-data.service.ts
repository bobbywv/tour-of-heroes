import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Jesse Faden' },
      { id: 13, name: 'Ephraim Winslow' },
      { id: 14, name: 'Alan Wake' },
      { id: 15, name: 'Leon Kennedy' },
      { id: 16, name: 'Ward Phillips' },
      { id: 17, name: 'Edward Pierce' },
      { id: 18, name: 'Ethan Winters' },
      { id: 19, name: 'Ranni' },
      { id: 20, name: 'Miquella' },
    ];
    return { heroes };
  }

  // Override the genId method to ensure that a hero always has an ID.
  // If heroes array is empty, the method below returns the initial number (11).
  // If heroes array is not empty, the method returns the highest hero id + 1
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
