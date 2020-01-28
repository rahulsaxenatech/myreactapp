import React, { Fragment, Component } from 'react';
import Spinner from '../components/layout/Spinner';
import PropTypes from 'prop-types';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const { name, login, avatar_url, company, bio, hireable } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <div class='row'>
          <div class='col-xs-1-12'>
            <div class='card'>
              <div class='card-body'>
                <h3 class='card-title'>{name}</h3>
                Hireable:{' '}
                {hireable ? (
                  <i className='fa fa-check text-success' />
                ) : (
                  <i className='fa fa-times-circle text-danger' />
                )}
                <p class='card-text'>{login}</p>
              </div>
            </div>
          </div>
          <div class='col-xs-1-12'>
            <div class='card'>
              <div class='card-body'>
                <h3 class='card-title'>{company}</h3>
                <p class='card-text'>{bio}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className='round-img'
          style={{ width: '150px' }}
          src={avatar_url}
          alt='Profile image'
        />
      </Fragment>
    );
  }
}

export default User;
