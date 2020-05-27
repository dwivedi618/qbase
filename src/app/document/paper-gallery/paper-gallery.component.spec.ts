import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperGalleryComponent } from './paper-gallery.component';

describe('PaperGalleryComponent', () => {
  let component: PaperGalleryComponent;
  let fixture: ComponentFixture<PaperGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
