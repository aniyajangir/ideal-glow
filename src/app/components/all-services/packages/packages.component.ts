import { Component } from '@angular/core';
import {faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  rupee = faIndianRupeeSign;
}
