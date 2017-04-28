import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState, Profile, Experiences } from './store.types';

export interface Action {
  type: string,
  profile?: Profile,
  experiences?: Experiences
}

@Injectable()
export class CvActions {
  static SET_CONTENT = 'SET_CONTENT';
  static SET_LOADED = 'SET_LOADED';

  constructor(private ngRedux: NgRedux<AppState>) {}

  setContent(profile: Profile, experiences: Array<Experiences>) {
    this.setLoaded();
    this.ngRedux.dispatch({
      type: CvActions.SET_CONTENT,
      experiences,
      profile
    });
  }

  setLoaded() {
    this.ngRedux.dispatch({ type: CvActions.SET_LOADED });
  }
}
