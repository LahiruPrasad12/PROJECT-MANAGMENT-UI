import React, {useContext} from 'react';
import AuthContext from "../../../../context/AuthContext";

const UserListItem = ({ handleFunction }) => {
  const { user } = AuthContext();
  const {loggedIn, loggedInGroup} = useContext(AuthContext);

  return (
    <div
      onClick={handleFunction}
    >
      <div

      />
      <div>
        <div>{user.name}</div>
        <div>
          <b>Email : </b>
          {user.email}
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
