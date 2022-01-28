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
  
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  constructor() { }

  ngOnInit(): void {

    
  }

}
