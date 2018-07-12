import { get } from 'lodash';

const filterbyType = type => item => item.type === type;

const reduceBy = byKey => (output, item) => ({
  ...output,
  [get(item, byKey)]: item,
});

export default (response = {}, state = {}) => ({
  total_pages: get(response, 'meta.total_pages'),
  total_count: get(response, 'meta.total_count'),
  links: get(response, 'links'),
  users: get(response, 'included', [])
    .filter(filterbyType('user'))
    .reduce(reduceBy('id'), get(state, 'users', {})),
  messages: get(response, 'included', [])
    .filter(filterbyType('feed-message'))
    .reduce(reduceBy('id'), get(state, 'messages', {})),
  data: get(response, 'data', []).map(item => get(item, 'id')),
  entries: get(response, 'data', [])
    .filter(filterbyType('feed-item'))
    .reduce(reduceBy('id'), get(state, 'entries', {})),
});
