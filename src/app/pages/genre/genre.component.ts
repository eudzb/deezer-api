import {Component, OnInit} from '@angular/core';
import {DeezerRequestService} from '../../services/deezer-request.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  loading = true;
  genre: any;
  genres: any[];
  genreArtists: any[];
  genrePodcast: any[];
  genreRadios: any[];

  constructor(
    private deezerRequest: DeezerRequestService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initRouteParam();
  }

  initRouteParam() {
    this.activatedRoute.params
      .subscribe(params => {
        this.initGenreById(params.id);
        this.initAllGenres();
        this.initArtistsFromGenre(params.id);
        this.initPodcastFromGenre(params.id);
        this.initRadioFromGenre(params.id);
        this.loading = false;
      });
  }

  initArtistsFromGenre(genreId: number) {
    this.deezerRequest.getArtistFromGenre(genreId)
      .subscribe((artists: any) => {
        this.genreArtists = artists.data;
      });
  }

  initPodcastFromGenre(genreId: number) {
    this.deezerRequest.getPodcastFromGenre(genreId)
      .subscribe((podcast: any) => {
        console.warn(podcast.data);
        this.genrePodcast = podcast.data;
      });
  }

  initRadioFromGenre(genreId: number) {
    this.deezerRequest.getRadioFromGenre(genreId)
      .subscribe((radio: any) => {
        this.genreRadios = radio.data;
      });
  }

  initGenreById(genreId: number) {
    this.deezerRequest.getGenreById(genreId)
      .subscribe((genre: any) => {
        this.genre = genre;
      });
  }

  private initAllGenres() {
    this.deezerRequest.getAllGenre()
      .subscribe((genres: any) => {
        this.genres = genres.data;
      });
  }
}
