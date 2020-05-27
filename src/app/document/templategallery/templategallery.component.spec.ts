import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplategalleryComponent } from './templategallery.component';

describe('TemplategalleryComponent', () => {
  let component: TemplategalleryComponent;
  let fixture: ComponentFixture<TemplategalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplategalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplategalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
