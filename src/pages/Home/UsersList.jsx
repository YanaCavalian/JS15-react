import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getUsersById } from "../../Store/usersSlice";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const getIdUser = (id) => {
    dispatch(getUsersById(id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/JS15-react/details/${user.id}`}
              onClick={() => {
                getIdUser(user.id);
              }}
            >
              <span>{user.firstName}</span>
              <span>{user.lastName}</span>
            </Link>

            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
};
