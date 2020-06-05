import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCreComponent } from './pack-cre.component';

describe('PackCreComponent', () => {
  let component: PackCreComponent;
  let fixture: ComponentFixture<PackCreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackCreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackCreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
