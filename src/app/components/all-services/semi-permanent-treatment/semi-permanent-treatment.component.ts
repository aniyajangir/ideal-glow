import { Component } from '@angular/core';
import {faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-semi-permanent-treatment',
  templateUrl: './semi-permanent-treatment.component.html',
  styleUrls: ['./semi-permanent-treatment.component.css']
})
export class SemiPermanentTreatmentComponent {
  rupee= faIndianRupeeSign;
}
