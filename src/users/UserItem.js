import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Default mmethod to assign props
// const UserItem = props => {
//   const { imgurl, id, url } = props.user;

// Destructuring  Props
const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className='card text-center'>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image className='w-75 p-1' src={avatar_url} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <h4>{login}</h4>
            <div>
              <Link to={`user/${login}`} className='btn btn-dark btn-sm my-1'>
                more
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
