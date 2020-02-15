import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutquestionpaperComponent } from './aboutquestionpaper.component';

describe('AboutquestionpaperComponent', () => {
  let component: AboutquestionpaperComponent;
  let fixture: ComponentFixture<AboutquestionpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutquestionpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutquestionpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
