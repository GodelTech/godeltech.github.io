import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from '../services/api.service';
import { RepositoryModel } from '../models/repository.model';
import { InfoService } from '../services/info.service';
import { URLS } from '../constants/urls';
import { ColorModel } from '../models/color.model';

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
        private infoService: InfoService
    ) { }

    ngOnInit(): void {
        this.loadColorsForLanguages();
        this.loadRepositoryList();
        this.searchControl.valueChanges.subscribe((term: string) => this.onSearchTermChange(term));
    }

    onDetailsOpen(id: number): void {
        console.log(id, 'coming soon!');
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
        this.infoService.getInfoMap<ColorModel>(URLS.colors).subscribe((x: Map<string, ColorModel>) => {
            this.colorsForLanguages = x;
        });
    }

    public getColor(language: string): string {
        return this.colorsForLanguages.get(language)?.color || '#fff';
    }
}
