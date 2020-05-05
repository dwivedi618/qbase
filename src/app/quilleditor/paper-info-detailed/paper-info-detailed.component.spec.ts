import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperInfoDetailedComponent } from './paper-info-detailed.component';

describe('PaperInfoDetailedComponent', () => {
  let component: PaperInfoDetailedComponent;
  let fixture: ComponentFixture<PaperInfoDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperInfoDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperInfoDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
