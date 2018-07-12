import { createSelector } from 'reselect';

import combineRelationships from 'ROOT/utils/combineNewsfeedRelationships';

const getNewsfeed = createSelector(
  state => state.newsfeed,
  newsfeed => newsfeed,
);

export const getNewsfeedState = createSelector(
  getNewsfeed,
  newsfeed => newsfeed,
);

export const getNewsfeedStateWithRelationships = createSelector(
  state => combineRelationships(state.newsfeed),
  newsfeed => newsfeed,
);
