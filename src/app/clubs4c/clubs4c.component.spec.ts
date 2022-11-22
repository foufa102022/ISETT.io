import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clubs4cComponent } from './clubs4c.component';

describe('Clubs4cComponent', () => {
  let component: Clubs4cComponent;
  let fixture: ComponentFixture<Clubs4cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clubs4cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clubs4cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
