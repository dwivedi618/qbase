import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuilleditorComponent } from './quilleditor.component';

describe('QuilleditorComponent', () => {
  let component: QuilleditorComponent;
  let fixture: ComponentFixture<QuilleditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuilleditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuilleditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
