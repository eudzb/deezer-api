import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-artist-slider',
  templateUrl: './artist-slider.component.html',
  styleUrls: ['./artist-slider.component.scss']
})
export class ArtistSliderComponent implements OnInit {
  @Input() artists: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
