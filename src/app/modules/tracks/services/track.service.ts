import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataSongs from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([])

  constructor() { 
  const{data}:any = (dataSongs as any).default;

    this.dataTracksTrending$ = of(
      data
    )

  }
}
