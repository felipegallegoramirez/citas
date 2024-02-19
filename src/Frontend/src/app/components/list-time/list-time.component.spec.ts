import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimeComponent } from './list-time.component';

describe('ListTimeComponent', () => {
  let component: ListTimeComponent;
  let fixture: ComponentFixture<ListTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
