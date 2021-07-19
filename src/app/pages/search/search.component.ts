import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeezerRequestService} from '../../services/deezer-request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  loading = true;
  searchQuery: string;
  tracks: any[];
  artists: any[];
  albums: any[];
  podcasts: any[];
  radios: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private deezerRequest: DeezerRequestService
  ) {
  }

  ngOnInit(): void {
    this.initRouteParam();
  }

  initRouteParam() {
    this.activatedRoute.params
      .subscribe(params => {
        this.searchQuery = params.query;
        this.getTracks(params.query);
        this.getArtists(params.query);
        this.getAlbums(params.query);
        this.getPodcasts(params.query);
        this.getRadios(params.query);
        this.loading = false;
      });
  }

  getTracks(searchTracks: string) {
    this.deezerRequest.getSearchTracks(searchTracks)
      .subscribe((tracks: any) => this.tracks = tracks.data);
  }

  getArtists(searchArtist: string) {
    this.deezerRequest.getSearchArtists(searchArtist)
      .subscribe((artist: any) => this.artists = artist.data);
  }

  getAlbums(searchAlbums: string) {
    this.deezerRequest.getSearchAlbums(searchAlbums)
      .subscribe((albums: any) => this.albums = albums.data);
  }

  getPodcasts(searchPodcasts: string) {
    this.deezerRequest.getSearchPodcasts(searchPodcasts)
      .subscribe((podcasts: any) => this.podcasts = podcasts.data);
  }

  getRadios(searchRadios: string) {
    this.deezerRequest.getSearchRadios(searchRadios)
      .subscribe((radios: any) => this.radios = radios.data);
  }
}
