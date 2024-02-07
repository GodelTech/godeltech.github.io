import { Component, OnInit } from '@angular/core';
import { MdModel } from '../models/md.model';
import { InfoService } from '../services/info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})

export class RepositoryComponent implements OnInit {
  markdownUrl!: string;

  constructor(
    private infoService: InfoService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const org = this.route.snapshot.paramMap.get('organization');
    const repo = this.route.snapshot.paramMap.get('repo');
    this.loadMarkdownInfo(`${org}/${repo}`);
  }

  private loadMarkdownInfo(fullRepoPath: string): void {
    this.infoService.getInfo<MdModel>(`https://api.github.com/repos/${fullRepoPath}/contents/README.md`).subscribe((x: MdModel) => {
      this.markdownUrl = x.download_url;
    });
  }
}
