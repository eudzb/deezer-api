import {Component, OnInit, HostListener} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';
import {DeezerRequestService} from '../../services/deezer-request.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  actualUrl: string;
  searchQuery: string = null;

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
    const genresLabel = document.querySelector('.genres-label') as HTMLElement;
    const searchIcon = document.querySelector('#search-icon') as HTMLElement;
    const searchInputText = document.querySelector('#search-input-text') as HTMLElement;
    if (window.scrollY > 70) {
      nav.classList.add('bg-white');
      nav.classList.add('shadow-sm');
      deezerLabel.classList.add('text-dark');
      genresLabel.classList.add('text-dark');
      searchIcon.classList.add('search-icon-dark');
      searchInputText.classList.add('text-dark');
      searchInputText.classList.add('search-input-dark');
    } else {
      nav.classList.remove('bg-white');
      nav.classList.remove('shadow-sm');
      deezerLabel.classList.remove('text-dark');
      genresLabel.classList.remove('text-dark');
      searchIcon.classList.remove('search-icon-dark');
      searchInputText.classList.remove('text-dark');
      searchInputText.classList.remove('search-input-dark');
    }
  }

  onSearch() {
    if (!this.searchQuery || this.searchQuery.trim() === '') {
      return;
    }
    this.router.navigate(['/search/', this.searchQuery]);
  }
}
