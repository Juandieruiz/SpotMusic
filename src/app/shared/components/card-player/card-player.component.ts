import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit{

  @Input() mode:'small' | 'big' = 'small';

  @Input() track:TrackModel = { 
    _id:0, 
    name: '',
    album:'',
    cover: '',
    url: '', 
  };
  constructor(private _multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel): void {
    console.log('Enviando canción al reproductor.... ' + track)
    this._multimediaService.callback.emit(track);
  }


}
