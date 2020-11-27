import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCategoryNewComponent } from './store-category-new.component';

describe('StoreCategoryNewComponent', () => {
  let component: StoreCategoryNewComponent;
  let fixture: ComponentFixture<StoreCategoryNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCategoryNewComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCategoryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
