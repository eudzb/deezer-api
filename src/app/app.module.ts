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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'album/:id', component: AlbumComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'genre/:id', component: GenreComponent},
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
    GenreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
