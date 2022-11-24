import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RusultComponent } from './rusult.component';

describe('RusultComponent', () => {
  let component: RusultComponent;
  let fixture: ComponentFixture<RusultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RusultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RusultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
