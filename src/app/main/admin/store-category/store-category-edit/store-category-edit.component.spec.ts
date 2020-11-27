import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCategoryEditComponent } from './store-category-edit.component';

describe('StoreCategoryEditComponent', () => {
  let component: StoreCategoryEditComponent;
  let fixture: ComponentFixture<StoreCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCategoryEditComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
