import styled from 'styled-components';

import { PRIMARY } from 'CONFIG/theme';

const NewsfeedItem = styled.div.attrs({
  className: 'newsfeed-item',
})`
  display: block;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e4e4e4;

  &,
  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    background-color: #f5f5f5;
  }

  .newsfeed-tile {
    padding-bottom: 0px;
  }

  .newsfeed-tile-content {
    .tile-title,
    .tile-text {
      margin-bottom: 0;
    }

    .tile-date {
      margin-bottom: 0.5rem;
      font-size: 14px;
    }
  }

  .attachment-tile {
    border-top: 1px solid #eceaea;
    padding-top: 7px;
    margin-top: 15px;
  }

  .tile-icon-attachment {
    align-content: space-around;
    align-items: center;
    background: ${PRIMARY};
    border-radius: 0.1rem;
    color: #fff;
    display: flex;
    display: -ms-flexbox;
    -ms-flex-align: center;
    -ms-flex-line-pack: distribute;
    font-size: 1.2rem;
    height: 2rem;
    width: 2rem;
  }
`;

export default NewsfeedItem;
