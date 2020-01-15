import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriminalService } from '../Service/criminal.service';
import { Criminal } from '../criminals.model';
import { Details } from '../details.model';

@Component({
  selector: 'app-criminal-detail',
  templateUrl: './criminal-detail.component.html',
  styleUrls: ['./criminal-detail.component.scss']
})
export class CriminalDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CriminalService) { }
  public model: Criminal;
  public details: Details
  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    console.log(id);

    this.service.getDetails(id).subscribe(res => {
      if (res) {
        this.details = res;
        this.model = res.criminal
        console.log(this.details);
      }

    });

  }

}
