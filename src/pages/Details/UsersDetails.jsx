import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const UsersDetails = (userId) => {
  const users = useSelector((state) => state.users.users);
  const userActiveId = useSelector((state) => state.users.userId);
  const person = users.find((user) => user.id === userActiveId);

  return (
    <section>
      <h2>User details</h2>
      <Link to="/JS15-react">Back</Link>
      <div>
        <h4>
          {person.firstName} {person.lastName}
        </h4>
        <ul>
          <li>
            <span>Age:</span>
            {person.age}
          </li>
          <li>
            <span>Address:</span>
            {person.address.address}
          </li>
          <li>
            <span>Email:</span>
            {person.email}
          </li>

          <li>
            <span>Phone:</span>
            {person.phone}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UsersDetails;
