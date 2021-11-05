import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

// * importamos el json que contiene los datos de la canción
import * as dataSongs from '../../../../data/tracks.json' 
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  
  mockTracksList: Array<TrackModel> = [
    
  ]
  constructor() { }

  ngOnInit(): void {

    // Creamos una lista de objetos con los datos de la cancion y lo imprimimos por consola
    const { data } :any = (dataSongs as any).default
    // Le asignamos a la lista de canciones el valor de la variable data
    this.mockTracksList = data;
    // TODO: Comprobacion de obtención de datos en Consola
    // console.log(data)
  }

}
