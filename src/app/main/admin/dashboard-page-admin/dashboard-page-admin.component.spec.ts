import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {PoPageModule} from '@po-ui/ng-components';

import {DashboardPageAdminComponent} from './dashboard-page-admin.component';

describe('DashboardPageAdminComponent', () => {
    let component: DashboardPageAdminComponent;
    let fixture: ComponentFixture<DashboardPageAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                PoPageModule,
            ],
            declarations: [DashboardPageAdminComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardPageAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
