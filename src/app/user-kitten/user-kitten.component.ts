import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css',
})
export class UserKittenComponent {}
