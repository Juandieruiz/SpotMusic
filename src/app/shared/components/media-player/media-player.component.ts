import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: any = { 
  cover: 'https://picsum.photos/200/300',
  album: 'Future',
  name: 'Juandieruiz',
}
  constructor() { }

  ngOnInit(): void {
  }

}
