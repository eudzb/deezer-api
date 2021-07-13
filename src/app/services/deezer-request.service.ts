import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeezerRequestService {
  API_URL = 'http://localhost:5000';
  requestHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    access_token: 'fr6ucYcCWyb6U09LRnVX5aLb2b0kjcydDNTDzQOoleS2qcZv1Q5'
  });

  constructor(
    private http: HttpClient
  ) { }

  getAllGenre() {
    return this.http.get(`${this.API_URL}`, {
      headers: this.requestHeader
    });
  }

  getSelenaAlbum() {
    return this.http.get(`${this.API_URL}/selena`, {
      headers: this.requestHeader
    });
  }
}
