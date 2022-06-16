import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDatatableComponent } from './page-datatable.component';

describe('PageDatatableComponent', () => {
  let component: PageDatatableComponent;
  let fixture: ComponentFixture<PageDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDatatableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
