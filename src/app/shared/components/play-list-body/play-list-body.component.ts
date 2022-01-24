import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  // Opciones con el mismo nombre de la propiedad
  // tracks: Array<TrackModel> = [];
  tracks: TrackModel[] = [];

  optionSort: {property:string | null, order: string} = {
    property: null,order:'asc'
  }

  constructor() { }

  ngOnInit(): void {
    const { data }:any = (dataRaw as any).default
    this.tracks= data;
  }

  changeSort(property: string):void{
    const {order} =this.optionSort
    this.optionSort = {
      property:property,
      order: (order === 'asc') ? 'desc' : 'asc'
    }
  }

}
