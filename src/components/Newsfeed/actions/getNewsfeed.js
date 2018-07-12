import {
  NEWSFEED_REQUESTED,
  NEWSFEED_FULLFILLED,
  NEWSFEED_REJECTED,
} from '../Newsfeed.actionTypes';

import { getNewsfeed } from 'API/newsfeed';
import normalizeNewsfeed from 'ROOT/utils/normalizeNewsfeed';

export default (options = {}, next) => async (dispatch, getState) => {
  const { newsfeed: currentNewsfeed } = getState();
  const page = !isNaN(options.page) ? parseInt(options.page, 10) : 1;

  try {
    dispatch({ type: NEWSFEED_REQUESTED, payload: options });

    const newsfeed = await getNewsfeed(options);

    dispatch({
      type: NEWSFEED_FULLFILLED,
      payload: normalizeNewsfeed(newsfeed, currentNewsfeed, page === 1),
    });
  } catch (error) {
    dispatch({ type: NEWSFEED_REJECTED, payload: error });
  }
};
