import {Component, OnInit} from '@angular/core';
import {DeezerRequestService} from '../../services/deezer-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topArtists: any[];
  loading = true;

  constructor(private deezerRequest: DeezerRequestService) {
  }

  ngOnInit(): void {
    this.initTopArtists();
  }

  initTopArtists() {
    this.deezerRequest.getTopArtists()
      .subscribe((artists: any) => {
        this.topArtists = artists.data;
      }).add(() => this.loading = false);
  }

}
