import { Component } from '@angular/core';
import { KittenService } from '../services/kitten.service';
import { Kitten } from '../models/kitten.model';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  kittenList!: Kitten[];

  constructor(private kittenService: KittenService) {}
  ngOnInit(): void {
    this.kittenList = this.kittenService.getKittens();
    console.log('kittens from getKitten', this.kittenService.getKittens());
  }
  adoptKitten(kitten: Kitten) {
    console.log(kitten);
    this.kittenService.adoptKitten(kitten);
    this.kittenList = this.kittenService.getKittens();
  }
}
