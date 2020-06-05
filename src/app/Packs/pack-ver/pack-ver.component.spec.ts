import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackVerComponent } from './pack-ver.component';

describe('PackVerComponent', () => {
  let component: PackVerComponent;
  let fixture: ComponentFixture<PackVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
