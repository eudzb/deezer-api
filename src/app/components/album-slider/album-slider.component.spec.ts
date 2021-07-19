import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSliderComponent } from './album-slider.component';

describe('AlbumSliderComponent', () => {
  let component: AlbumSliderComponent;
  let fixture: ComponentFixture<AlbumSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
