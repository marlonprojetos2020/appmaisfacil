import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailPageComponent } from './users-detail-page.component';

describe('UsersDetailPageComponent', () => {
  let component: UsersDetailPageComponent;
  let fixture: ComponentFixture<UsersDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
