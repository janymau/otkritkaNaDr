import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodarkaComponent } from './podarka.component';

describe('PodarkaComponent', () => {
  let component: PodarkaComponent;
  let fixture: ComponentFixture<PodarkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodarkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
