import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsManComponent } from './sports-man.component';

describe('SportsManComponent', () => {
  let component: SportsManComponent;
  let fixture: ComponentFixture<SportsManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
