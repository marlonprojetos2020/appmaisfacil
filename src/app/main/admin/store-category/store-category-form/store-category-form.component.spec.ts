import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCategoryFormComponent } from './store-category-form.component';

describe('StoreCategoryFormComponent', () => {
  let component: StoreCategoryFormComponent;
  let fixture: ComponentFixture<StoreCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCategoryFormComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
