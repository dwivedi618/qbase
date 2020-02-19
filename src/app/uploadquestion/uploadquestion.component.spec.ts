import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadquestionComponent } from './uploadquestion.component';

describe('UploadquestionComponent', () => {
  let component: UploadquestionComponent;
  let fixture: ComponentFixture<UploadquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
