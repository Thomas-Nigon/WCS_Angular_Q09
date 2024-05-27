import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kitten } from '../models/kitten.model';

@Injectable({
  providedIn: 'root',
})
export class KittenService {
  private http = inject(HttpClient);
  constructor() {}
  getKittens() {
    return this.http.get<Kitten[]>('../assets/kittenList.json');
  }
}
