import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CriminalService } from '../Service/criminal.service';
import { Criminal } from '../criminals.model';

@Component({
  selector: 'app-criminal-list',
  templateUrl: './criminal-list.component.html',
  styleUrls: ['./criminal-list.component.scss']
})
export class CriminalListComponent implements OnInit {

  constructor(private router: Router, private service: CriminalService) { }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  searchKey: string;
  data$;

  displayedColumns = ['id', 'name', 'delete_criminal', 'see_more'];

  ngOnInit() {

    this.data$ = this.service.loadCriminals().subscribe(list => {
      let array = list.map(item => {
        return item;
      });

      this.dataSource = new MatTableDataSource(array);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  seeDetails(criminal: Criminal) {
    this.router.navigate(['/mostWanted/details', criminal.Id]);
  }

  deleteCriminal(criminal: Criminal) {
    if (confirm('Sure You Want to Delete this Criminal from Our Database?')) {
      console.log(criminal.Id);
      this.service.deleteCriminal(criminal.Id).subscribe(res => window.location.reload());
    }
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  refresh() {
    this.service.loadCriminals().subscribe((data: Criminal[]) => {
      this.dataSource.data = data;
    })
  }

}
