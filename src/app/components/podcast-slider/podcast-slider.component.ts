import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-podcast-slider',
  templateUrl: './podcast-slider.component.html',
  styleUrls: ['./podcast-slider.component.scss', '../../pages/genre/genre.component.scss']
})
export class PodcastSliderComponent implements OnInit {
  @Input() podcasts: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
