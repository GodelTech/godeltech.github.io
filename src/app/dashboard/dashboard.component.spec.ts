import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { ApiService } from '../services/api.service';
import { DashboardComponent } from './dashboard.component';
import { ColorsService } from '../services/colors.service';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    const apiServiceMock = { getRepositoryList: jasmine.createSpy('getRepositoryList').and.returnValue(of(null)) };
    const colorServiceMock = { getColorsForLanguages: jasmine.createSpy('getColorsForLanguages').and.returnValue(of({})) };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            providers: [{ provide: ApiService, useValue: apiServiceMock }, { provide: ColorsService, useValue: colorServiceMock }],
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
