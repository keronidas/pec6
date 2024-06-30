import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home/services/home.service';
import { DataDTO } from '../../models/DataDTO';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gender-results-component',
  templateUrl: './gender-results-component.component.html',
  styleUrl: './gender-results-component.component.scss'
})
export class GenderResultsComponentComponent implements OnInit { // Implementa OnInit

  data: DataDTO[] = [];

  constructor(private dataService: HomeService) { }



  title = 'ng-chart';
  chart: any = [];

 

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
    this.chart = new Chart('canvas-notas', {
      type: 'bar',
      data: {
        labels: [ 'Alumnos aprobados', 'Alumnos suspensos'],
        datasets: [
          {
            label: 'Alumnos',
            data: [ this.data.filter(element => element.mark >= 5).length, this.data.filter(element => element.mark < 5).length],
            backgroundColor: [  
              'rgba(75, 192, 192, 0.4)',  
              'rgba(255, 99, 132, 0.4)',  
            ],
            borderColor: [   
              'rgba(75, 192, 192, 1)',    
              'rgba(255, 99, 132, 1)',   
            ],
            borderWidth: 1,
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