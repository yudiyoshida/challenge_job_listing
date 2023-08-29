import { Component, OnInit } from '@angular/core';
import { JobService } from './services/job.service';
import { Job } from './models/job.model';
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public jobs!: Job[];
  public filters = this.filterService.filters;

  constructor(
    private jobService: JobService,
    private filterService: FilterService,
  ) {}

  ngOnInit(): void {
    this.getJobs();
  }

  public getJobs() {
    this.jobService.getJobs().subscribe({
      next: (res) => this.jobs = res,
    });
  }

  public addToFilter(event: Event) {
    const tag = (event.target as HTMLButtonElement).innerText;
    this.filterService.addTag(tag);
    this.updateJobList();
  }

  public removeFromFilter(tag: string) {
    this.filterService.deleteTag(tag);
    this.updateJobList();
  }

  public clearFilter() {
    this.filterService.clearTags();
    this.getJobs();
  }

  public updateJobList() {
    this.getJobs();
    this.filters.subscribe({
      next: (res) => {
        res.forEach((tag) => {
          this.jobs = this.jobs.filter((job) => {
            return (job.role === tag || job.level === tag || job.languages.includes(tag) || job.tools.includes(tag));
          });
        });
      },
    });
  }
}
