import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PoPageModule } from '@po-ui/ng-components';

import { UserBalanceComponent } from './user-balance.component';

describe('UserBalanceComponent', () => {
  let component: UserBalanceComponent;
  let fixture: ComponentFixture<UserBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PoPageModule
      ],
      declarations: [ UserBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
