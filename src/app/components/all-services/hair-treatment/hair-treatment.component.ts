import { Component } from '@angular/core';
import {faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hair-treatment',
  templateUrl: './hair-treatment.component.html',
  styleUrls: ['./hair-treatment.component.css']
})
 
export class HairTreatmentComponent {
   rupee = faIndianRupeeSign
}
