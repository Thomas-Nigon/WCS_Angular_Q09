import { Component, EventEmitter, Output, inject } from '@angular/core';
import { KittenService } from '../services/kitten.service';
import { Kitten } from '../models/kitten.model';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  /*   providers: [KittenService], */
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  kittenList: Kitten[] = [];
  //myList: Kitten[] = [];
  /*   private kittenService = inject(KittenService); */
  constructor(private kittenService: KittenService) {}
  ngOnInit(): void {
    console.log('init listkitten');
    this.kittenList = this.kittenService.getKittens();
    console.log('kittens from getKitten', this.kittenService.getKittens());
    /*    this.kittenService.getKittens().subscribe((fetchedData) => {
      console.log(fetchedData);
      this.kittenList = fetchedData;
      console.log(this.kittenList);
    }); */
  }
  adoptMe(event: Event) {
    const element = event.currentTarget as HTMLButtonElement;
    console.log(element);
    /*   this.myList.push(this.kittenList[parseInt(element.id)]);
    this.kittenList = this.kittenList.filter(
      (kitten) => kitten.id !== parseInt(element.id)
    ); */
  }
}
