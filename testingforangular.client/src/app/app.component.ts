import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private http: HttpClient) {
    Chart.register(...registerables);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.loadChart();
  }

  loadChart() {
    // Mock function to simulate Utils.months
    const Utils = {
      months: (options: { count: number }) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months.slice(0, options.count);
      }
    };

    // Bar chart setup
    const labelsBar = Utils.months({ count: 12 });
    const dataBar = {
      labels: labelsBar,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 90, 50, 85],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)'
        ],
        borderWidth: 1
      }]
    };

    const configBar: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: dataBar,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };

    // Line chart setup
    const labelsLine = Utils.months({ count: 12 });
    const dataLine = {
      labels: labelsLine,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 90, 50, 85],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label: 'My Second Dataset',
          data: [45, 39, 60, 71, 46, 45, 30, 50, 60, 80, 40, 75],
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1
        },
        {
          label: 'My Third Dataset',
          data: [35, 29, 50, 61, 36, 35, 20, 40, 50, 70, 30, 65],
          fill: false,
          borderColor: 'rgb(54, 162, 235)',
          tension: 0.1
        }
      ]
    };

    const configLine: ChartConfiguration<'line'> = {
      type: 'line',
      data: dataLine,
    };

    // Polar area chart setup
    const dataPolar = {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    };

    const configPolar: ChartConfiguration<'polarArea'> = {
      type: 'polarArea',
      data: dataPolar,
      options: {}
    };

    // Radar chart setup
    const dataRadar = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };

    const configRadar: ChartConfiguration<'radar'> = {
      type: 'radar',
      data: dataRadar,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      },
    };

    // Initialize Bar Chart
    const chartElementBar = document.getElementById('myChartBar') as HTMLCanvasElement;
    new Chart(chartElementBar, configBar);

    // Initialize Line Chart
    const chartElementLine = document.getElementById('myChartLine') as HTMLCanvasElement;
    new Chart(chartElementLine, configLine);

    // Initialize Polar Area Chart
    const chartElementPolar = document.getElementById('myChartPolar') as HTMLCanvasElement;
    new Chart(chartElementPolar, configPolar);

    // Initialize Radar Chart
    const chartElementRadar = document.getElementById('myChartRadar') as HTMLCanvasElement;
    new Chart(chartElementRadar, configRadar);
  }
}
