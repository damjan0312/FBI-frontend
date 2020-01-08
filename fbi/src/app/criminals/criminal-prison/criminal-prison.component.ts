import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { PrisonService } from '../Service/prison.service';
import { Prison } from '../prison.model';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { CriminalService } from '../Service/criminal.service';
import { Criminal } from '../criminals.model';

@Component({
  selector: 'app-criminal-prison',
  templateUrl: './criminal-prison.component.html',
  styleUrls: ['./criminal-prison.component.scss']
})
export class CriminalPrisonComponent implements OnInit {
  prisonForm: FormGroup;
  prisonsBox: Array<Prison> = [];
  criminalsBox: Array<Criminal> = [];

  selectedPrison: string;
  selectedCriminal: string;


  constructor(private builder: FormBuilder, private service: PrisonService, private criminalService: CriminalService) {

    this.prisonForm = this.builder.group({
      criminal: ['', Validators.required],
      prison: ['', Validators.required]
    })
  }

  ngOnInit() {

    // this.service.loadPrison().subscribe(prisons => {
    //   this.prisonsBox = prisons;
    // })

    // this.criminalService.loadCriminals().subscribe(criminals => {
    //   this.criminalsBox = criminals;
    // })

  }


  addPrison() {
    // console.log(this.selectedCriminal);
    // console.log(this.selectedPrison);
    console.log("Komentarisan je poziv")
    //this.service.addRelationship(this.selectedCriminal, this.selectedPrison);
  }
}
