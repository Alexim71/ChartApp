import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';

// Enregistrer tous les contrôleurs, éléments et échelles
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
  imports: [BaseChartDirective]
})
export class ChartComponent {
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Années'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Valeurs'
        }
      }
    }
  };

  public lineChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType: string = 'line'; // Changer 'bar' à 'line'
  public lineChartLegend: boolean = true;

  public lineChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Série A' },
  
  ];

  // Événements
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
