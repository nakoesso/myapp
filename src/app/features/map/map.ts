import { Component, ElementRef, viewChild, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `
    <div #refMap class="w-full h-96 border border-gray-200 rounded-lg shadow-lg p-4">
      
    </div> 
    `
})
export class MapComponent implements OnInit {
  private map!: L.Map;
    mapContainer = viewChild<ElementRef<HTMLDivElement>>('refMap');

    ngOnInit() {
        const el = this.mapContainer()?.nativeElement;
        this.map = L.map(el!).setView([48.8566, 2.3522], 13); // Paris par défaut
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19
        }).addTo(this.map);
        
        L.marker([48.8566, 2.3522])
          .addTo(this.map)
          .bindPopup('<b>Paris, France</b><br/>Capitale de la France')
          .openPopup();
          }
}