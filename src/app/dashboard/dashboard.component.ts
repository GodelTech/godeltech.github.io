import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from '../services/api.service';
import { ColorsService } from '../services/colors.service';
import { RepositoryModel } from '../models/repository.model';
import { ColorModel } from '../models/color.model';
import { MatDialog } from '@angular/material/dialog';
import { RepositoryInfoDialog } from '../repositoryInfo/repositoryInfo.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    repositoryList: RepositoryModel[] = [];
    colorsForLanguages: Map<string, ColorModel> = new Map<string, ColorModel>();
    filteredRepositoryList: RepositoryModel[] = [];
    searchControl = new FormControl();

    constructor(
        private apiService: ApiService,
        private colorsService: ColorsService,
        public dialog: MatDialog) { }

    ngOnInit(): void {
        this.loadColorsForLanguages();
        this.loadRepositoryList();
        this.searchControl.valueChanges.subscribe((term: string) => this.onSearchTermChange(term));
    }

    onDetailsOpen(id: number): void {
        this.dialog.open(RepositoryInfoDialog, {
            data: {
                repository: this.repositoryList.filter(item => item.id === id)[0],
                colorsForLanguages: this.colorsForLanguages
            },
            width: '1000px',
            height: 'fit-content'
        });
    }

    onSearchTermChange(term: string): void {
        if (!term) {
            this.filteredRepositoryList = this.repositoryList;
        } else {
            this.filteredRepositoryList = this.repositoryList.filter(x =>
                x.name && x.name.toLowerCase().includes(term.toLowerCase())
                || x.language && x.language.toLowerCase().includes(term.toLowerCase())
            );
        }
    }

    private loadRepositoryList(): void {
        this.apiService.getRepositoryList().subscribe((x: RepositoryModel[]) => {
            this.repositoryList = x;
            this.filteredRepositoryList = this.repositoryList;
        });
    }

    private loadColorsForLanguages(): void {
        this.colorsService.getColorsForLanguages().subscribe((x: Map<string, ColorModel>) => {
            this.colorsForLanguages = x;
        });
    }

    public getColor(language: string): string | undefined {
        return this.colorsForLanguages.get(language)?.color;
    }

    public getVisibilityString(visibility: string | undefined, archived: boolean) {
        return `${visibility}${archived ? ' archive' : ''}`;
    }
}
