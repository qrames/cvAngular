import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

import { latLng, LatLng, tileLayer } from 'leaflet';

import { CommunesService } from '../communes.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {
  buttonText: string = "Voir la météo";

  constructor(
    private CommunesService: CommunesService,
  ) { }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  ngOnInit() {
    this.getCommunes();
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

  getCommunes(): void {
    this.CommunesService.getCommunes().subscribe(data => {
      for (var commune of data['records']){
        console.log(commune['fields']['nom_chf']);
      }
    });
  }
}
