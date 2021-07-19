import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SliderComponent} from './components/slider/slider.component';
import {HttpClientModule} from '@angular/common/http';
import {ListGenresComponent} from './components/list-genres/list-genres.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DeezerIconComponent} from './components/deezer-icon/deezer-icon.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './pages/home/home.component';
import {AlbumComponent} from './pages/album/album.component';
import {MinuteSecondsPipe} from './pipes/minute-seconds.pipe';
import {ArtistComponent} from './pages/artist/artist.component';
import {PlaylistComponent} from './components/playlist/playlist.component';
import {ArtistSliderComponent} from './components/artist-slider/artist-slider.component';
import {GenreComponent} from './pages/genre/genre.component';
import {FormsModule} from '@angular/forms';
import {SearchComponent} from './pages/search/search.component';
import { AlbumSliderComponent } from './components/album-slider/album-slider.component';
import { PodcastSliderComponent } from './components/podcast-slider/podcast-slider.component';
import { RadioSliderComponent } from './components/radio-slider/radio-slider.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'album/:id', component: AlbumComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'genre/:id', component: GenreComponent},
  {path: 'search/:query', component: SearchComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ListGenresComponent,
    DeezerIconComponent,
    NavbarComponent,
    HomeComponent,
    AlbumComponent,
    MinuteSecondsPipe,
    ArtistComponent,
    PlaylistComponent,
    ArtistSliderComponent,
    GenreComponent,
    SearchComponent,
    AlbumSliderComponent,
    PodcastSliderComponent,
    RadioSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
