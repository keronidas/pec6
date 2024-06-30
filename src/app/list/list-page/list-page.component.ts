import { Component, OnInit } from '@angular/core';
import { DataDTO } from '../../models/DataDTO';
import { HomeService } from '../../home/services/home.service';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent implements OnInit { // Implementa OnInit

  data: DataDTO[] = [];

  constructor(private dataService: HomeService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }

}
