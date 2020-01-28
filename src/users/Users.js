import React from 'react';
// import { Button } from 'react-bootstrap';
import UserItem from './UserItem';
import Spinner from '../components/layout/Spinner';
import PropTypes from 'prop-types';

// class Users extends Component {
//   render() {
//     if (this.props.loading) {
//       return <Spinner />;
//     } else {
//       return (
//         <div style={userStyle}>
//           {this.props.users.map(user => (
//             <UserItem key={user.id} user={user} />
//           ))}
//           {/* <Button variant='primary'>Primary</Button> */}
//         </div>
//       );
//     }
//   }
// }

const Users = ({ loading, users }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
Users.prototype = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};
export default Users;
