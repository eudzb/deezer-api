import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-slider',
  templateUrl: './album-slider.component.html',
  styleUrls: ['./album-slider.component.scss']
})
export class AlbumSliderComponent implements OnInit {
  @Input() albums: any[];
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
