import { Component, OnInit, ViewChild } from '@angular/core';
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

  displayedColumns = ['id', 'name', 'delete_criminal'];

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


  deleteCriminal(criminal: Criminal) {
    if (confirm('Sure You Want to Delete this Criminal from Our Database?')) {
      console.log(criminal.id);
      this.service.deleteCriminal(criminal.id)
    }
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

}
