import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsEasyComponent } from './cards-easy.component';

describe('CardsEasyComponent', () => {
  let component: CardsEasyComponent;
  let fixture: ComponentFixture<CardsEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsEasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
