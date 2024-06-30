import { Component, OnInit } from '@angular/core';
import { DataDTO } from '../../models/DataDTO';
import { Chart } from 'chart.js';
import { HomeService } from '../../home/services/home.service';

@Component({
  selector: 'app-resume-data-component',
  templateUrl: './resume-data-component.component.html',
  styleUrl: './resume-data-component.component.scss'
})
export class ResumeDataComponentComponent implements OnInit { // Implementa OnInit

  data: DataDTO[] = [];

  constructor(private dataService: HomeService) { }



  title = 'ng-chart';
  chart: any = [];



  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
    this.chart = new Chart('canvas-resume', {
      type: 'bar',
      data: {
        labels: ['Alumnos', 'Alumnos aprobados', 'Alumnos suspensos'],
        datasets: [
          {
            label: 'Alumnos',
            data: [this.data.length, this.data.filter(element => element.mark >= 5).length, this.data.filter(element => element.mark < 5).length],
            backgroundColor: [
              'rgba(54, 162, 235, 0.4)',  
              'rgba(75, 192, 192, 0.4)',  
              'rgba(255, 99, 132, 0.4)',  
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',   
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