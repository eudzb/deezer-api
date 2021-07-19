import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-radio-slider',
  templateUrl: './radio-slider.component.html',
  styleUrls: ['./radio-slider.component.scss', '../../pages/genre/genre.component.scss']
})
export class RadioSliderComponent implements OnInit {
  @Input() radios: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
