import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { ApiService } from '../services/api.service';
import { DashboardComponent } from './dashboard.component';
import { InfoService } from '../services/info.service';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    const apiServiceMock = { getRepositoryList: jasmine.createSpy('getRepositoryList').and.returnValue(of(null)) };
    const infoServiceMock = { getInfoMap: jasmine.createSpy('getInfoMap').and.returnValue(of({})) };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            providers: [{ provide: ApiService, useValue: apiServiceMock }, { provide: InfoService, useValue: infoServiceMock }],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
