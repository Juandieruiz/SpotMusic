import { Component, OnInit } from '@angular/core';

// importamos todas las Canciones que hemos metido de manera manual
import * as dataSongs from '../../../../data/tracks.json' 
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  
  mockTracksList = [

  ]
  constructor() { }

  ngOnInit(): void {
    // Creamos una lista de objetos con los datos de la cancion y lo imprimimos por consola
    const { data } :any = (dataSongs as any).default
    console.log(data)
  }

}
