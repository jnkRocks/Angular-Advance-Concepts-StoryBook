import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectServiceComponent } from './subject-service.component';

describe('SubjectServiceComponent', () => {
  let component: SubjectServiceComponent;
  let fixture: ComponentFixture<SubjectServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
