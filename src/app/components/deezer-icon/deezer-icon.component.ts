import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-deezer-icon',
  templateUrl: './deezer-icon.component.html',
  styleUrls: ['./deezer-icon.component.scss']
})
export class DeezerIconComponent implements OnInit {
  actualUrl: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => this.actualUrl = urlAfterRedirects);
  }

}
