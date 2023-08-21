import { Component } from '@angular/core';
import {faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skin-treatment',
  templateUrl: './skin-treatment.component.html',
  styleUrls: ['./skin-treatment.component.css']
})
export class SkinTreatmentComponent {
rupee = faIndianRupeeSign
}
