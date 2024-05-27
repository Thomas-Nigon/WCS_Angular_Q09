import { Component, inject } from '@angular/core';
import { KittenService } from '../services/kitten.service';
import { Kitten } from '../models/kitten.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [KittenService],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  kittenList: Kitten[] = [];
  myList: Kitten[] = [];

  private kittenService = inject(KittenService);

  ngOnInit(): void {
    this.kittenService.getKittens().subscribe((fetchedData) => {
      console.log(fetchedData);
      this.kittenList = fetchedData;
      console.log(this.kittenList);
    });
  }
  adoptMe(event: Event) {
    console.log('ty dude', event);
    const element = event.currentTarget as HTMLButtonElement;
    console.log(element.id);
    console.log(parseInt(element.id));
    this.kittenList = this.kittenList.filter(
      (kitten) => kitten.id !== parseInt(element.id)
    );
    this.myList.push(this.kittenList[parseInt(element.id) - 1]);
  }
}
