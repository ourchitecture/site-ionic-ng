import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatreonComponent } from './patreon.component';

describe('PatreonComponent', () => {
  let component: PatreonComponent;
  let fixture: ComponentFixture<PatreonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatreonComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatreonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
