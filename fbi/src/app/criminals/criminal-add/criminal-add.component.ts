import { Component, OnInit } from '@angular/core';
import { Criminal } from '../criminals.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CriminalService } from '../Service/criminal.service'

@Component({
  selector: 'app-criminal-add',
  templateUrl: './criminal-add.component.html',
  styleUrls: ['./criminal-add.component.scss']
})
export class CriminalAddComponent implements OnInit {
  criminalForm: FormGroup;
  constructor(private builder: FormBuilder, private service: CriminalService) { }

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

    });
  }

  createCriminal() {
    console.log('ok');

    const newCriminal: Criminal = {
      name: this.criminalForm.get('name').value,
      placeOfBirth: this.criminalForm.get('placeOfBirth').value,
      dateOfBirth: this.criminalForm.get('dateOfBirth').value,
      hair: this.criminalForm.get('hair').value,
      eyes: this.criminalForm.get('eyes').value,
      height: this.criminalForm.get('height').value,
      weight: this.criminalForm.get('weight').value,
      sex: this.criminalForm.get('sex').value,
      race: this.criminalForm.get('race').value,
      ocuppation: this.criminalForm.get('ocuppation').value,
      nationality: this.criminalForm.get('nationality').value,
      reward: this.criminalForm.get('reward').value
    };

    console.log(newCriminal);

    console.log(this.service.createCriminal(newCriminal));
  }

}
