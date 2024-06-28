import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { DataDTO } from '../../models/DataDTO';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'] // Usa styleUrls en lugar de styleUrl
})
export class HomePageComponent implements OnInit { // Implementa OnInit

  data: DataDTO[] = [];

  constructor(private dataService: HomeService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }

}
