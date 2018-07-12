import request from './request';

const token = process.env.REACT_APP_TEST_TOKEN;

export const getNewsfeed = ({
  page = 1,
  per_page = 5,
  sort = 'inserted_at',
}) => {
  const params = `page[size]=${per_page}&page[number]=${page}&sort=${sort}`
    .replace(/\[/g, '%5B')
    .replace(/\]/g, '%5D');
  return request(`/feed_items?${params}`, 'get', null, token);
};
