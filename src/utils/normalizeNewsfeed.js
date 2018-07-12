import { get } from 'lodash';

const filterbyType = type => item => item.type === type;

const reduceBy = byKey => (output, item) => ({
  ...output,
  [get(item, byKey)]: item,
});

export default (response = {}, state = {}, reset = false) => {
  const currentData = get(state, 'data', []);
  const currentUsers = get(state, 'users', {});
  const currentMessages = get(state, 'messages', {});
  const currentEntries = get(state, 'entries', {});

  const newData = get(response, 'data', []);
  const newDataIds = newData.map(item => get(item, 'id'));

  return {
    total_pages: get(response, 'meta.total_pages'),
    total_count: get(response, 'meta.total_count'),
    links: get(response, 'links'),
    users: get(response, 'included', [])
      .filter(filterbyType('user'))
      .reduce(reduceBy('id'), currentUsers),
    messages: get(response, 'included', [])
      .filter(filterbyType('feed-message'))
      .reduce(reduceBy('id'), currentMessages),
    data: reset ? newDataIds : [...currentData, ...newDataIds],
    entries: newData
      .filter(filterbyType('feed-item'))
      .reduce(reduceBy('id'), currentEntries),
  };
};
