import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStundentComponent } from './edit-stundent.component';

describe('EditStundentComponent', () => {
  let component: EditStundentComponent;
  let fixture: ComponentFixture<EditStundentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStundentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStundentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
