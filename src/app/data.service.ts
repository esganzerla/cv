import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { StoreData } from './store/store.types';
import { CvActions } from './store/actions';

@Injectable()
export class DataService {
  storedData: StoreData;

  constructor(private http: Http, private cvActions: CvActions) {
    this.http = http

    if ('localStorage' in window) {
      const localStorageData = window.localStorage.getItem('lime-cv-data');

      if (!!localStorageData) {
        this.storedData = JSON.parse(localStorageData);
        return;
      }
    }

    this.loadData();
  }

  private loadData(): void {
    this.http.get('assets/data.json')
      .subscribe(
        data => {
          const jsonData: StoreData = data.json();
          this.saveData(jsonData);
          this.dataToRedux(jsonData);
        },
        this.reportError
      )
  }

  private saveData(data: StoreData): void {
    this.storedData = data;

    if ('localStorage' in window) {
      window.localStorage.setItem('lime-cv-data', JSON.stringify(data));
    }
  }

  private dataToRedux(data: StoreData): void {
    this.cvActions.setContent(data.profile, data.experiences);
  }

  private reportError(error: Error): void {
    console.error(error);
    alert('Sorry! Something went wrong, it was really not supposed to happen... =/');
  }

  public getData(): Object {
    if (typeof this.storedData === 'undefined') {
      this.loadData();
      return {};
    }

    this.dataToRedux(this.storedData);
    this.cvActions.setLoaded();
    return this.storedData;
  }
}
