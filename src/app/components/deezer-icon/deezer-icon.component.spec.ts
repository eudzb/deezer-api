import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerIconComponent } from './deezer-icon.component';

describe('DeezerIconComponent', () => {
  let component: DeezerIconComponent;
  let fixture: ComponentFixture<DeezerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
