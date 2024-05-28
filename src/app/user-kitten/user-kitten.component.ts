import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Kitten } from '../models/kitten.model';
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css',
})
export class UserKittenComponent {
  myKittens!: Kitten[];
  kittenService = inject(KittenService);

  ngOnInit(): void {
    this.myKittens = this.kittenService.getAdoptedKittens();
  }
}
