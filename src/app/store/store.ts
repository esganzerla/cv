import { Action, CvActions } from './actions';
import { Profile, Experiences, StoreData, AppState } from './store.types';

export const INITIAL_STATE: AppState = {
  isLoading: true,
  profile: {
    topics: [],
    personalDescription: '',
    developerDescription: ''
  }
};

export function rootReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case CvActions.SET_LOADED:
      return Object.assign({}, state, {
        isLoading: false
      });
    case CvActions.SET_CONTENT:
      return Object.assign({}, state, {
        profile: action.profile,
        experiences: action.experiences || []
      });
    default:
      return state;
  }
}
