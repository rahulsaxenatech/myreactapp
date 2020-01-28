import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { button } from 'react-bootstrap';

const Search = ({ showClear, clearUser, userSearch, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please type', 'light');
    } else {
      userSearch(text);
      setText('');
    }
  };
  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value='Search' className='btn btn-dark' />
      </form>
      {/* <button className='btn btn-secondary' onClick={this.props.clearUser}>
          clear
        </button> */}
      {showClear && (
        <button className='btn btn-secondary' onClick={clearUser}>
          clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  userSearch: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};
export default Search;
