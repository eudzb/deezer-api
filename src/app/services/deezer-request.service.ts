import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeezerRequestService {
  API_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  getAllGenre() {
    return this.http.get(`${this.API_URL}`);
  }

  getTopAlbums() {
    return this.http.get(`${this.API_URL}/topAlbum`);
  }

  getTopArtists() {
    return this.http.get(`${this.API_URL}/topArtist`);
  }

  getAlbum(albumId: number) {
    return this.http.get(`${this.API_URL}/album?id=${albumId}`);
  }

  getArtist(artistId: number) {
    return this.http.get(`${this.API_URL}/artist?id=${artistId}`);
  }

  getArtistTopTrack(artistId: number) {
    return this.http.get(`${this.API_URL}/artistTopTrack?id=${artistId}`);
  }

  getArtistRelated(artistId: number) {
    return this.http.get(`${this.API_URL}/artistRelated?id=${artistId}`);
  }

  getArtistFromGenre(genreId: number) {
    return this.http.get(`${this.API_URL}/genreArtist?id=${genreId}`);
  }

  getPodcastFromGenre(genreId: number) {
    return this.http.get(`${this.API_URL}/genrePodcast?id=${genreId}`);
  }

  getRadioFromGenre(genreId: number) {
    return this.http.get(`${this.API_URL}/genreRadios?id=${genreId}`);
  }

  getGenreById(genreId: number) {
    return this.http.get(`${this.API_URL}/genre?id=${genreId}`);
  }
}
