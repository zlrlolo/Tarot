import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultEasyComponent } from './result-easy.component';

describe('ResultEasyComponent', () => {
  let component: ResultEasyComponent;
  let fixture: ComponentFixture<ResultEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultEasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
