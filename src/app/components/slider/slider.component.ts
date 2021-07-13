import { Component, OnInit } from '@angular/core';
import {DeezerRequestService} from '../../services/deezer-request.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  genres: any[];

  constructor(private deezerRequest: DeezerRequestService) {
    this.deezerRequest.getAllGenre()
      .subscribe((genres: any) => this.genres = genres.data);
  }

  ngOnInit(): void {
  }

}
