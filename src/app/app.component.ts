import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { CvActions } from './store/actions';
import { INITIAL_STATE, rootReducer } from './store/store';
import { AppState, Experiences, Profile } from './store/store.types';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() readonly isLoading: Observable<boolean>;
  @select() readonly profile?: Observable<Profile>;
  @select() readonly experiences?: Observable<Experiences>;

  constructor(dataService: DataService, ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE
    );
    dataService.getData();
  }

}
