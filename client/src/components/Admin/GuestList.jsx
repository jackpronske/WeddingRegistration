import React from 'react';

const GuestList = ({ guestList }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Vegetarian</th>
            <th>Snail Mail</th>
          </tr>
          {guestList.map((guest) => (
            <tr key={guest._id}>
              <td>{guest.firstName}</td>
              <td>{guest.lastName}</td>
              <td>{guest.email}</td>
              <td>{guest.vegetarian ? 'yes': null}</td>
              <td>{guest.snail ? 'yes' : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default GuestList;
