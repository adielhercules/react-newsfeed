import { get } from 'lodash';

export default (state = {}) => {
  const { total_pages, total_count, page, loading, error, ...response } = state;

  return {
    total_count,
    total_pages,
    page,
    loading,
    error,
    data: get(response, 'data', []).map(id => {
      const relationships = get(response, `entries.${id}.relationships`, {});
      const feedMessageId = get(relationships, 'feed-message.data.id', null);
      const senderId = get(relationships, 'sender.data.id', null);

      return {
        ...get(response, `entries.${id}.attributes`, {}),
        sender: get(response, `users.${senderId}.attributes`, {}),
        message: get(response, `messages.${feedMessageId}.attributes`, {}),
      };
    }),
  };
};
