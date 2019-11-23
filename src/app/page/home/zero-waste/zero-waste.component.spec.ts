import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroWasteComponent } from './zero-waste.component';

describe('ZeroWasteComponent', () => {
  let component: ZeroWasteComponent;
  let fixture: ComponentFixture<ZeroWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
