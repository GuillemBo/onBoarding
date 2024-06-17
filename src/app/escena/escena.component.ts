import { CommonModule } from '@angular/common';
import { iStep } from './../interfaces/i-step.interface';
import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
  @Input() steps: iStep[] = [];
}
