import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  quizenames: string[] = [];
  public barChartLabels: Label[] = this.quizenames;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  chartData: any;
  countData: number[] = [];
  public barChartData: ChartDataSets[] = [
    { data: ([] = this.countData), label: 'Series A' },
  ];

  constructor(private service: ChartService) {
    this.service.chart().subscribe((res: any) => {
      console.log('res', res);
      this.chartData = res;
      this.chart();
    });

    // this.barChartData[0].data?.push();
  }

  chart() {
    for (let index = 0; index < this.chartData.length; index++) {
      this.quizenames.push(this.chartData[index].quizname);
      this.countData.push(this.chartData[index].count);
    }
  }

  ngOnInit(): void {}
}
