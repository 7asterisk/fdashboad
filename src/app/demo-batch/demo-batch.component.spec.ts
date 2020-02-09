import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBatchComponent } from './demo-batch.component';

describe('DemoBatchComponent', () => {
  let component: DemoBatchComponent;
  let fixture: ComponentFixture<DemoBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
