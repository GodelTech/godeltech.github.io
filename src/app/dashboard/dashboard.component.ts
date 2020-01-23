import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from '../services/api.service';
import { RepositoryModel } from '../models/repository.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    repositoryList: RepositoryModel[];
    filteredRepositoryList: RepositoryModel[];
    searchControl = new FormControl();

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
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
}
