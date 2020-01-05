import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-criminal-edit',
  templateUrl: './criminal-edit.component.html',
  styleUrls: ['./criminal-edit.component.scss']
})
export class CriminalEditComponent implements OnInit {
  criminalForm: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.criminalForm = this.builder.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      hair: ['', Validators.required],
      eyes: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      sex: ['', Validators.required],
      race: ['', Validators.required],
      ocuppation: ['', Validators.required],
      nationality: ['', Validators.required],
      reward: ['', Validators.required],
      caution: ['', Validators.required],
    });
  }

}
