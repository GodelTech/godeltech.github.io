import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { RepositoryModel } from '../../models/repository.model';
import { SubscriptionDestroyer } from '../../abstracts/subscription-destroyer';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends SubscriptionDestroyer implements OnInit {
    repositoryList: RepositoryModel[];
    filteredRepositoryList: RepositoryModel[];
    searchControl = new FormControl();

    constructor(private apiService: ApiService) {
        super();
    }

    ngOnInit(): void {
        this.loadRepositoryList();
        this.subscriptions.push(this.searchControlSubscription());
    }

    onDetailsOpen(id: number): void {
        console.log(id, 'coming soon!');
    }

    private searchControlSubscription(): Subscription {
        return this.searchControl.valueChanges.subscribe((term: string) => {
            if (!term) {
                this.filteredRepositoryList = this.repositoryList;
            } else {
                this.filteredRepositoryList = this.repositoryList.filter(x =>
                    x.name && x.name.toLowerCase().includes(term.toLowerCase())
                    || x.language && x.language.toLowerCase().includes(term.toLowerCase())
                );
            }
        })
    }

    private loadRepositoryList(): void {
        this.apiService.getRepositoryList().subscribe((x: RepositoryModel[]) => {
            this.repositoryList = x;
            this.filteredRepositoryList = this.repositoryList;
        });
    }
}
