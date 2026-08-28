import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // TODO: Connect to your .NET backend API here

      // Reset form after successful submission
      this.contactForm.reset();
      this.isSubmitted = false;
      alert('Message sent successfully!');
    }
  }
}
