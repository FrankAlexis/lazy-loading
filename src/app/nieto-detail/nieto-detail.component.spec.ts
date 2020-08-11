import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoDetailComponent } from './nieto-detail.component';

describe('NietoDetailComponent', () => {
  let component: NietoDetailComponent;
  let fixture: ComponentFixture<NietoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
