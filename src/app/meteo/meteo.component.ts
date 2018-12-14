import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';

import { CommunesService } from '../communes.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  buttonText: string = "Voir la météo";
	markers: Layer[] = [];
  active: boolean  = false;

  constructor(
    private CommunesService: CommunesService,
    private WeatherService: WeatherService,
  ) { }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, minZoom: 7, attribution: 'Open Street Map'})
    ],
    zoom: 7,
    center: latLng(43.8927232, 3.2827625),
  };

  ngOnInit() {
    this.getCommunes();
  }

  activeMap(): void {
    console.log(this.active);
    if (this.active){
      this.buttonText = "Désactiver la carte";
      this.active = false;
    } else {
      this.buttonText = "Voir la météo";
      this.active = true;
    }
  }
  getCommunes(): void {
    this.CommunesService.getCommunes().subscribe(data => {
      for (var commune of data['records']){
        this.getWeather(commune['fields']['nom_chf']);
      }
    });
  }

  getWeather(city): void {
    this.WeatherService.getWeather(city).subscribe(data => {
      this.addMarker(data['weather']['0']['icon'], data['coord']['lat'], data['coord']['lon']);
    });
  }

  addMarker(iconName, lat, lon) {
		const newMarker = marker(
			[ lat, lon ],
			{
				icon: icon({
					iconSize: [80, 80],
					iconAnchor: [40, 40],
					iconUrl: `http://openweathermap.org/img/w/${iconName}.png`,
				})
			}
		);
		this.markers.push(newMarker);
  }
}
