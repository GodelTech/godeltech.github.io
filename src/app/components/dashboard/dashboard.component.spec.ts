import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { BaseTest } from '@godeltech/angular-testing';

import { ApiService } from '../../services/api.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    const apiServiceMock = { getRepositoryList: jasmine.createSpy('getRepositoryList').and.returnValue(of(null)) };

    BaseTest.setupTestBed({
        declarations: [DashboardComponent],
        providers: [{ provide: ApiService, useValue: apiServiceMock }],
        schemas: [NO_ERRORS_SCHEMA]
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
