import { Component, OnInit } from '@angular/core';
import {DeezerRequestService} from '../../services/deezer-request.service';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrls: ['./list-genres.component.scss']
})
export class ListGenresComponent implements OnInit {
  genres: any[];

  constructor(private deezerRequest: DeezerRequestService) {
    this.deezerRequest.getAllGenre()
      .subscribe((genres: any) => {
        this.genres = genres.data;
      });
  }

  ngOnInit(): void {
  }

}
