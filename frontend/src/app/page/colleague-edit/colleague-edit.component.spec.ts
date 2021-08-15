import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueEditComponent } from './colleague-edit.component';

describe('ColleagueEditComponent', () => {
  let component: ColleagueEditComponent;
  let fixture: ComponentFixture<ColleagueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColleagueEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleagueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
