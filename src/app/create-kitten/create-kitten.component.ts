import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  NonNullableFormBuilder,
} from '@angular/forms';
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [KittenService],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css',
})
export class CreateKittenComponent {
  @Output() retriveKittens = new EventEmitter();

  constructor(private fb: NonNullableFormBuilder) {}
  kittenService = inject(KittenService);
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
    console.log(this.addKittenForm.value);
    this.kittenService.addKitten(this.addKittenForm?.value);
  }
}
