import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Validators,
  FormGroup,
  ReactiveFormsModule,
  NonNullableFormBuilder,
} from '@angular/forms';
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css',
})
export class CreateKittenComponent {
  kittenService = inject(KittenService);
  constructor(private fb: NonNullableFormBuilder) {}

  public addKittenForm!: FormGroup;
  ngOnInit(): void {
    this.addKittenForm = this.fb.group({
      name: ['Poppy', Validators.required],
      dob: ['1999-01-01', Validators.required],
      breed: ['Beagle', Validators.required],
      imgSrc: ['https://placedog.net/800/640?id=76 ', Validators.required],
    });
  }
  onSubmit() {
    this.kittenService.addKitten(this.addKittenForm?.value);
  }
}
