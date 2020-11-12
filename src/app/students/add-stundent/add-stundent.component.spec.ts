import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStundentComponent } from './add-stundent.component';

describe('AddStundentComponent', () => {
  let component: AddStundentComponent;
  let fixture: ComponentFixture<AddStundentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStundentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStundentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
