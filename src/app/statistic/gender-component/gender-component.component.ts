import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HomeService } from '../../home/services/home.service';
import { DataDTO } from '../../models/DataDTO';

@Component({
  selector: 'app-gender-component',
  templateUrl: './gender-component.component.html',
  styleUrl: './gender-component.component.scss'
})
export class GenderComponentComponent implements OnInit { // Implementa OnInit

  data: DataDTO[] = [];

  constructor(private dataService: HomeService) { }
  title = 'ng-chart';
  chart: any = [];



  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
    this.chart = new Chart('canvas-total', {
      type: 'bar',
      data: {
        labels: ['Alumnos', 'Alumnos Masculinos', 'Alumnas femeninas'],
        datasets: [
          {
            label: 'Alumnos',
            data: [this.data.length, this.data.filter(element => element.sex === "M").length, this.data.filter(element => element.sex === "F").length],
            backgroundColor: [
              'rgba(75, 192, 192, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(255, 192, 203, 0.4)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 192, 203, 1)',
            ],
            borderWidth: 3,
          },
        ],
      },

      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}