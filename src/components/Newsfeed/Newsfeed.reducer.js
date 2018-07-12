import { createReducer } from 'redux-create-reducer';
import {
  NEWSFEED_REQUESTED,
  NEWSFEED_FULLFILLED,
  NEWSFEED_REJECTED,
} from './Newsfeed.actionTypes';

const initialState = {
  loading: false,
  error: null,
  page: 1,
  total_pages: 0,
  total_count: 0,
  data: [],
  entries: {},
  links: {},
  users: {},
  messages: {},
};

const events = {
  [NEWSFEED_REQUESTED]: (state, { payload }) => ({
    ...state,
    ...payload,
    loading: true,
  }),
  [NEWSFEED_FULLFILLED]: (state, { payload }) => ({
    ...state,
    ...payload,
    error: null,
    loading: false,
  }),
  [NEWSFEED_REJECTED]: (state, { payload }) => ({
    ...state,
    error: true,
    loading: false,
  }),
};

export default createReducer(initialState, events);
