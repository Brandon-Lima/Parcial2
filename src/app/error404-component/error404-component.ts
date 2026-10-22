import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-error404-component',
  styleUrl: './error404-component.css',
  templateUrl: './error404-component.html',
})
export class Error404Component {
  constructor(private router: Router) {}

  volverInicio() {
    this.router.navigate(['']);
  }
}