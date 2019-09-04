import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoplayingComponent } from './videoplaying.component';

describe('VideoplayingComponent', () => {
  let component: VideoplayingComponent;
  let fixture: ComponentFixture<VideoplayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoplayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
