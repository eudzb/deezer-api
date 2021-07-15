import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Input() playlist: any[];
  @Input() label: string;
  isPlaying = false;
  previewAudio = new Audio();
  trackPlaying: number;

  constructor() { }

  ngOnInit(): void {
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
