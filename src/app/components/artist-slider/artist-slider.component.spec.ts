import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSliderComponent } from './artist-slider.component';

describe('ArtistSliderComponent', () => {
  let component: ArtistSliderComponent;
  let fixture: ComponentFixture<ArtistSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
