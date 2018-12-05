import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import * as L from 'leaflet';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {
  buttonText: string = "Voir la météo";

  constructor() { }

  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const meteoMap = L.map('myleaflet').setView([50.6311634, 3.0599573], 12);

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(meteoMap);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

  }

  activeMapScroll():void {
    if(!$('#map').hasClass("active")){
      console.log('!!!!');
      this.buttonText = "Désactiver la carte";
      $('#map').addClass("active");
    }
    else{
      this.buttonText = "Voir la météo";
      $('#map').removeClass("active");
    }
  }
}
