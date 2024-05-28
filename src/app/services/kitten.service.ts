import { Injectable, inject } from '@angular/core';

import { Kitten } from '../models/kitten.model';

@Injectable({
  providedIn: 'root',
})
export class KittenService {
  kittenList: Kitten[] = [];
  /* myList: Kitten[] = []; */

  constructor() {}
  /*   getKittensFromJson() {
    return this.http.get<Kitten[]>('../assets/kittenList.json');
  } */
  addKitten(kitten: Kitten) {
    this.kittenList.push(kitten);
    console.log('kitten to be adopted:', this.kittenList);
  }
  getKittens() {
    return this.kittenList;
  }
}
