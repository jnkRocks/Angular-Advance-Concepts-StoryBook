import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionTokenComponent } from './injection-token.component';

describe('InjectionTokenComponent', () => {
  let component: InjectionTokenComponent;
  let fixture: ComponentFixture<InjectionTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
