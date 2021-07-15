import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeezerRequestService} from '../../services/deezer-request.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album: any;
  artistRelated: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private deezerRequest: DeezerRequestService) {
  }

  ngOnInit(): void {
    this.initRouteParam();
  }

  initRouteParam() {
    this.activatedRoute.params
      .subscribe(params => {
        this.deezerRequest.getAlbum(params.id)
          .subscribe(album => {
            this.album = album;
            this.initArtistRelated();
          });
      });
  }

  initArtistRelated() {
    this.deezerRequest.getArtistRelated(this.album.artist.id)
      .subscribe((artists: any) => this.artistRelated = artists.data);
  }
}
