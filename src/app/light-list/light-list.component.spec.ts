import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightListComponent } from './light-list.component';

describe('LightListComponent', () => {
  let component: LightListComponent;
  let fixture: ComponentFixture<LightListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
