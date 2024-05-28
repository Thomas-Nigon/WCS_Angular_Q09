import { Injectable } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Injectable({
  providedIn: 'root',
})
export class KittenService {
  kittenList: Kitten[] = [];
  adoptedKittenList: Kitten[] = [];

  constructor() {}

  addKitten(kitten: Kitten) {
    kitten.id = this.kittenList.length + 1;
    this.kittenList.push(kitten);
  }
  getKittens() {
    return this.kittenList;
  }
  adoptKitten(adoptedKitten: Kitten) {
    this.adoptedKittenList.push(adoptedKitten);
    console.log(adoptedKitten.id);
    console.log("adopted kitten's list:", this.adoptedKittenList);
    this.kittenList = this.kittenList.filter(
      (kitten) => kitten.id !== adoptedKitten.id
    );
    console.log('kitten to be adopted:', this.kittenList);
  }
  getAdoptedKittens() {
    return this.adoptedKittenList;
  }
}
