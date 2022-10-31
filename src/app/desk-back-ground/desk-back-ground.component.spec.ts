import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskBackGroundComponent } from './desk-back-ground.component';

describe('DeskBackGroundComponent', () => {
  let component: DeskBackGroundComponent;
  let fixture: ComponentFixture<DeskBackGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskBackGroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskBackGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
