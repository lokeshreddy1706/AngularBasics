import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedlearningsComponent } from './advancedlearnings.component';

describe('AdvancedlearningsComponent', () => {
  let component: AdvancedlearningsComponent;
  let fixture: ComponentFixture<AdvancedlearningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedlearningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedlearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
