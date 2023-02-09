import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestPageComponent } from './add-quest-page.component';

describe('AddQuestPageComponent', () => {
  let component: AddQuestPageComponent;
  let fixture: ComponentFixture<AddQuestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
