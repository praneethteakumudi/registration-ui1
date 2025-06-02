import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AppUser } from '../../Models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
  if (this.registerForm.invalid) return;

  const user: AppUser = this.registerForm.value;
  this.userService.registerUser(user).subscribe({
    next: (response) => {
  this.successMessage = response || 'User registered successfully!';
},
error: (error) => {
  console.error('Registration error:', error);
  this.errorMessage = 'Registration failed.';
}
  });
  }
}
