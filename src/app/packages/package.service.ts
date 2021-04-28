import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Package } from './package.model';
import { of } from 'rxjs';
import * as _ from 'lodash';
import * as yml from 'js-yaml';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private cache: Array<Package> = null;

  constructor(
    private http: HttpClient,
  ) { }

  fetchAll() {
    if (this.cache) {
      return of(this.cache);
    }

    return this.http.get<string>('assets/data/components.yml',
      {
        responseType: 'text' as 'json'
      })
      .pipe(
        map(items => yml.safeLoad(items) as Package[]),
        tap(items => this.cache = items)
      );
  }

  fetchTags() {
    return this.fetchAll()
      .pipe(
        map(items => _.sortBy([...new Set(items.reduce(
          (result, item) => result.concat(item.tags),
          []
        ))]))
      );
  }

  findByNpm(npm: string) {
    return this.fetchAll().pipe(
      map(items => items.find(item => item.npm === npm))
    );
  }

  fetchNpm(pkg: Package) {
    return this.http.get<any>(
      `https://api.npms.io/v2/package/${pkg.npm.replace('@', '%40').replace('/', '%2F')}`
    );
  }

  fetchReadme(pkg: Package) {
    return this.http.get<string>(
      `https://raw.githubusercontent.com/${pkg.owner}/${pkg.repo}/master/README.md`,
      {
        responseType: 'text' as 'json'
      }
    );
  }

}
