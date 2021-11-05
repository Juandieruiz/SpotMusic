import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  
  mockTracksList = [
    {
      name: 'Music 1',
    },
    {
      name: 'Music 2',
    },
    {
      name: 'Music 3',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
