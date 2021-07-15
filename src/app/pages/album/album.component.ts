import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeezerRequestService} from '../../services/deezer-request.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  isPlaying = false;
  previewAudio = new Audio();
  album: any;
  trackPlaying: number;

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
          });
      });
  }

  onPlay(audio: any, trackId: number) {
    this.trackPlaying = trackId;
    this.isPlaying = true;
    this.previewAudio.src = audio;
    this.previewAudio.play();
  }

  onStop() {
    if (!this.isPlaying) {
      return;
    }
    this.isPlaying = false;
    this.previewAudio.pause();
  }
}
