import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFactoryComponent } from './use-factory.component';

describe('UseFactoryComponent', () => {
  let component: UseFactoryComponent;
  let fixture: ComponentFixture<UseFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
