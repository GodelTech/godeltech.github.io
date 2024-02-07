import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './repository.component';

import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    RepositoryComponent
  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MatIcon,
    MarkdownModule.forChild()
  ]
})
export class RepositoryModule { }