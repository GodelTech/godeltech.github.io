import { Component, OnInit, Inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogRef,
} from '@angular/material/dialog';
import { RepositoryModel } from '../models/repository.model';
import { TagModel } from '../models/tag.model';
import { RepositoryInfoService } from '../services/repository-info.service';
import { ColorModel } from '../models/color.model';

@Component({
    selector: 'repository-info',
    templateUrl: './repositoryInfo.component.html',
    styleUrls: ['./repositoryInfo.component.scss'],
})

export class RepositoryInfoDialog implements OnInit {
    repositoryModel!: RepositoryModel;
    repositoryTags: TagModel[] = [];
    repositoryLanguages: Map<string, number> = new Map<string, number>;
    colorsForLanguages: Map<string, ColorModel> = new Map<string, ColorModel>();
    sumOfColors: number = 0;

    constructor(
        private infoService: RepositoryInfoService,
        public dialogRef: MatDialogRef<RepositoryInfoDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.repositoryModel = data.repository as RepositoryModel;
        this.colorsForLanguages = data.colorsForLanguages as Map<string, ColorModel>;
    }

    ngOnInit(): void {
        this.loadReleases();
        this.loadLanguages();
    }

    private loadReleases(): void {
        this.infoService.getInfoArray<TagModel>(this.repositoryModel.tags_url).subscribe((x: TagModel[]) => {
            this.repositoryTags = x;
        });
    }

    private loadLanguages(): void {
        this.infoService.getInfoMap<number>(this.repositoryModel.languages_url).subscribe((x: Map<string, number>) => {
            this.repositoryLanguages = x;
            this.sumOfColors = Array.from(x.values()).reduce((sum, current) => sum + current, 0);
        });
    }

    public getTopicUrl(topic: string): string {
        return `https://github.com/topics/${topic}`;
    }

    public getLanguagePercent(language: string): string {
        return `${(this.repositoryLanguages.get(language) || 0) * 100 / this.sumOfColors}%`;
    }

    public getLanguageColor(language: string): string {
        return this.colorsForLanguages.get(language)?.color || 'white';
    }

    public getLanguagesArray(): string[] {
        return Array.from(this.repositoryLanguages.keys());
    }
}