import { Component, OnInit } from '@angular/core';
import { JobService } from './services/job.service';
import { Job } from './models/job.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public jobs!: Job[];
  public filters = new Set<string>();

  constructor(private jobService: JobService) {}

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
    this.filters.add(tag);
    this.updateJobList();
  }

  public removeFromFilter(tag: string) {
    this.filters.delete(tag);
    this.updateJobList();
  }

  public clearFilter() {
    this.filters.clear();
    this.getJobs();
  }

  public updateJobList() {
    this.getJobs();
    this.filters.forEach((tag) => {
      this.jobs = this.jobs.filter((job) => {
        return (job.role === tag || job.level === tag || job.languages.includes(tag) || job.tools.includes(tag));
      });
    });
  }
}
