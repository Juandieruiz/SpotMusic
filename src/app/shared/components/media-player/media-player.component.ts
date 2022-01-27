import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = { 
    cover: 'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg',
    album: 'BZRP Session',
    name: 'Snow Tha Product',
    url: 'https://www.youtube.com/watch?v=5-_q-_q-_q-_',
    _id: '5e8f9c9c9c9c9c9c9c9c9c9'
}
  constructor(private _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$ = this._multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion' + response)
      }
    );
  }

}
