import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css',
})
export class UserKittenComponent {}
