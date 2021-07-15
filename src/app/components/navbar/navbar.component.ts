import {Component, OnInit, HostListener} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  actualUrl: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => this.actualUrl = urlAfterRedirects);
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (this.actualUrl !== '/' && this.actualUrl !== '/home') {
      return;
    }
    const nav = document.querySelector('#nav-menu') as HTMLElement;
    const deezerLabel = document.querySelector('#deezer-label') as HTMLElement;
    if (window.scrollY > 70) {
      nav.classList.add('bg-white');
      nav.classList.add('shadow-sm');
      deezerLabel.classList.add('text-dark');
    } else {
      nav.classList.remove('bg-white');
      nav.classList.remove('shadow-sm');
      deezerLabel.classList.remove('text-dark');
    }
  }
}
