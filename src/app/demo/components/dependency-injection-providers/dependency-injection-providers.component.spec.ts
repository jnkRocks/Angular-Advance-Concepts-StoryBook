import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionProvidersComponent } from './dependency-injection-providers.component';

describe('DependencyInjectionProvidersComponent', () => {
  let component: DependencyInjectionProvidersComponent;
  let fixture: ComponentFixture<DependencyInjectionProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyInjectionProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
