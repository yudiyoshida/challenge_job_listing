import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _tags = new Set<string>();
  private _filters = new BehaviorSubject<Set<string>>(this._tags);

  private notify() {
    this._filters.next(this._tags);
  }

  public addTag(tag: string) {
    this._tags.add(tag);
    this.notify();
  }

  public deleteTag(tag: string) {
    this._tags.delete(tag);
    this.notify();
  }

  public clearTags() {
    this._tags.clear();
    this.notify();
  }

  public get filters() {
    return this._filters.asObservable();
  }
}
