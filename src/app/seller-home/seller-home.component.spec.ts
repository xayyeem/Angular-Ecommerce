import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerhomecomponentComponent } from './seller-home.component';

describe('SellerhomecomponentComponent', () => {
  let component: SellerhomecomponentComponent;
  let fixture: ComponentFixture<SellerhomecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerhomecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerhomecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
