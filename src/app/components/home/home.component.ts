import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Registration App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <h1 class="text-center">Welcome to Registration App!</h1>
    </div>
  `
})
export class HomeComponent {}
