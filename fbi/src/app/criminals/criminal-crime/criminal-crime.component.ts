import { Component, OnInit } from '@angular/core';
import { CrimeService } from '../Service/crime.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CriminalService } from '../Service/criminal.service';
import { Criminal } from '../criminals.model';
import { Crime } from '../crime.model';

@Component({
  selector: 'app-criminal-crime',
  templateUrl: './criminal-crime.component.html',
  styleUrls: ['./criminal-crime.component.scss']
})
export class CriminalCrimeComponent implements OnInit {

  crimeForm: FormGroup;
  crimeBox: Array<Crime> = [];
  criminalsBox: Array<Criminal> = [];

  selectedPrison: string;
  selectedCriminal: string;

  constructor(private builder: FormBuilder, private service: CrimeService, private criminalService: CriminalService) {
    this.crimeForm = this.builder.group({
      criminal: ['', Validators.required],
      crime: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.service.loadPrison().subscribe(crimes => {
      this.crimeBox = crimes;
    })

    this.criminalService.loadCriminals().subscribe(criminals => {
      this.criminalsBox = criminals;
    })

  }

}
