import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCategoryListComponent } from './store-category-list.component';

describe('StoreCategoryListComponent', () => {
  let component: StoreCategoryListComponent;
  let fixture: ComponentFixture<StoreCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCategoryListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
