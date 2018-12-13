import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
// import * as L from 'leaflet';
import { latLng, LatLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {
  buttonText: string = "Voir la météo";

  constructor() { }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  ngOnInit() {

  }

  activeMapScroll():void {
    if(!$('#map').hasClass("active")){
      this.buttonText = "Désactiver la carte";
      $('#map').addClass("active");
    }
    else{
      this.buttonText = "Voir la météo";
      $('#map').removeClass("active");
    }
  }
}
