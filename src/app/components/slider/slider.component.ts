import { Component, OnInit } from '@angular/core';
import {DeezerRequestService} from '../../services/deezer-request.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  albums: any[];

  constructor(private deezerRequest: DeezerRequestService) { }

  ngOnInit(): void {
    this.initAlbum();
  }

  initAlbum() {
    this.deezerRequest.getTopAlbums().subscribe((albums: any) => this.albums = albums.data);
  }

}
