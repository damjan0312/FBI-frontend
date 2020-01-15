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

  selectedCrime: string;
  selectedCriminal: number;
  selectedCaution: string;

  constructor(private builder: FormBuilder, private service: CrimeService, private criminalService: CriminalService) {
    this.crimeForm = this.builder.group({
      criminal: ['', Validators.required],
      crime: ['', Validators.required],
      caution: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.service.loadCrime().subscribe(crimes => {
      this.crimeBox = crimes;
    })

    this.criminalService.loadCriminals().subscribe(criminals => {
      this.criminalsBox = criminals;
    })

  }

  addCrime() {

    this.service.addRelationship(this.selectedCriminal, this.selectedCrime, this.selectedCaution).subscribe(res => {
      console.log(res);
    })

  }

}
