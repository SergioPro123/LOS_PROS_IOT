import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { NavParams, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {Paho} from 'ng2-mqtt/mqttws31';
import { IotService } from '../../services/iot.service'
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Temperatura' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
      responsive: true,
      scales: {
          xAxes: [{
              display: false
          }]
      }
  };
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  lineChart: Chart;
  
  public temp: number;
  public varTemp: number;
  private client;
  public userID : string;
  mqttbroker = 'losprosiot.online';
  constructor(
    private toast:IotService,
    private navparams: NavParams,
    private modal:ModalController,
  ){}

  ngOnInit() {
    this.temp = this.navparams.get("temp");
    this.userID = this.navparams.get("uid");
    this.client = new Paho.MQTT.Client(this.mqttbroker, Number(8093), this.userID);
    //this.client.onMessageArrived = this.onMessageArrived.bind(this);
    this.onMessage();
    this.client.onConnectionLost = this.onConnectionLost.bind(this);
    this.client.connect({
      onSuccess: this.onConnect.bind(this),
      userName: 'android_client',
      password:'123456',
      keepAliveInterval:60
    });
  }

  ngAfterViewInit() {
    this.lineChartMethod();
  }
  onConnect() {
    console.log('Conectado...');
    this.client.subscribe('inMonitor');
  }
  onConnectionLost(responseObject) {
    this.client.onConnectionLost = (responseObject: Object) => {
    // console.log('Connection lost : ' + JSON.stringify(responseObject));
    this.toast.warning('Monitor is now offline')
    };
  }
  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Temperatura : ' + message.payloadString);
      message.destinationName.indexOf('inMonitor')
      this.varTemp = Number(message.payloadString);
      const date = new Date();
      this.lineChart.data.labels.push(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
      this.lineChart.data.datasets.forEach((dataset) => {
        dataset.data.push(this.varTemp);
      });
    this.lineChart.update();
    };
  }

  closeMonitor(){
    this.modal.dismiss();
  }
  lineChartMethod(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      options:{
        scales : {
          yAxes: [{
              ticks: {
              beginAtZero: true,
                max : 100,
              }
          }]
        }
      },
      data: {
        datasets: [
          {
            label: 'Potenciometro',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
            spanGaps: false, 
          }
        ]
      }
    });
  }
}
