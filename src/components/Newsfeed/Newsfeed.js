import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import moment from 'moment';
import ContentLoader from 'react-content-loader';
import { Link } from 'react-router-dom';

import NewsfeedItem from './NewsfeedItem.styled';
import Wrapper from './Wrapper.styled';

import getNewsfeed from './actions/getNewsfeed';
import { getNewsfeedStateWithRelationships } from './Newsfeed.selectors';

const ItemLoader = () => (
  <div className="placeholder-item">
    <ContentLoader
      height={100}
      width={370}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb">
      <circle cx="28" cy="28" r="16" />
      <rect x="52" y="18" rx="4" ry="4" width="100" height="13" />
      <rect x="52" y="45" rx="4" ry="4" width="10" height="8" />
      <rect x="72" y="45" rx="4" ry="4" width="50" height="8" />
      <rect x="52" y="70" rx="5" ry="5" width="300" height="20" />
    </ContentLoader>
  </div>
);

class Newsfeed extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getNewsfeed({ page: 1 }));
  }

  renderRow = item => {
    const createdAt = get(item, 'message.inserted-at', undefined);
    const senderName = get(item, 'sender.name', '');
    const hasEvidence =
      get(item, 'message.feed-message-type', '') ===
      'EVIDENCE_DOCUMENT_REQUESTED';
    const senderInitials = senderName
      .split(' ')
      .map((name = '') => name[0])
      .join('');

    return (
      <NewsfeedItem to="/" key={item.id}>
        <div className="tile newsfeed-tile">
          <div className="tile-icon">
            <Link to="/user/123">
              <figure
                className="avatar avatar-md"
                data-initial={senderInitials}
                style={{ backgroundColor: '#5755d9' }}
              />
            </Link>
          </div>
          <div className="tile-content newsfeed-tile-content">
            <p className="tile-title">
              <Link to="/user/123">{senderName}</Link>
            </p>
            {createdAt && (
              <p className="tile-subtitle text-gray tile-date">
                <i className="icon icon-time" />{' '}
                <span>{moment(createdAt).format('LLLL')}</span>
              </p>
            )}
            <p className="tile-subtitle text-gray tile-text">
              {get(item, 'message.text', '')}
            </p>
          </div>
        </div>

        {hasEvidence && (
          <div className="tile tile-centered attachment-tile">
            <div className="tile-icon">
              <div className="tile-icon-attachment">
                <i className="icon icon-link centered" />
              </div>
            </div>
            <div className="tile-content">
              <div className="tile-title">
                <Link to="/documents/123">evidence.pdf</Link>
              </div>
              <div className="tile-subtitle text-gray">
                14MB · Private ·{' '}
                {moment(createdAt).format('MMM Do, YYYY, hh:mm a')}
              </div>
            </div>
            <div className="tile-action">
              <button className="btn btn-link">
                <i className="icon icon-more-vert" />
              </button>
            </div>
          </div>
        )}
      </NewsfeedItem>
    );
  };

  prevPage = () => {
    const { newsfeed = {}, dispatch } = this.props;
    const { page } = newsfeed;

    dispatch(getNewsfeed({ page: page - 1 }));
  };

  nextPage = () => {
    const { newsfeed = {}, dispatch } = this.props;
    const { page } = newsfeed;

    dispatch(getNewsfeed({ page: page + 1 }));
  };

  render() {
    const { newsfeed = {} } = this.props;
    const { data: newsfeedItems = [], loading, page, total_pages } = newsfeed;

    return (
      <Wrapper>
        <div className="divider" />

        {loading && (
          <div className="loading-placeholder">
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
          </div>
        )}

        {!loading && newsfeedItems.map(this.renderRow)}

        <ul className="pagination">
          {page > 1 && (
            <li className="page-item page-prev">
              <button className="btn btn-link" onClick={this.prevPage}>
                <div className="page-item-subtitle">Newer</div>
              </button>
            </li>
          )}
          {page < total_pages && (
            <li className="page-item page-next">
              <button className="btn btnn-link" onClick={this.nextPage}>
                <div className="page-item-subtitle">Older</div>
              </button>
            </li>
          )}
        </ul>
      </Wrapper>
    );
  }
}

const mapState = state => ({
  newsfeed: getNewsfeedStateWithRelationships(state),
});

export default connect(mapState)(Newsfeed);
