import { Component } from '@angular/core';
import {faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-laser-treatment',
  templateUrl: './laser-treatment.component.html',
  styleUrls: ['./laser-treatment.component.css']
})
export class LaserTreatmentComponent {
  rupee = faIndianRupeeSign;
}
