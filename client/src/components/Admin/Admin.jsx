import React from 'react';
import GuestList from './GuestList';
import StatList from './StatList';
import axios from 'axios';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestList: []
    };

    this.retrieveGuests = this.retrieveGuests.bind(this);
  }

  componentDidMount() {
    this.retrieveGuests();
  }

  retrieveGuests() {
    axios.get('/test')
      .then((data) => {
        this.setState({
          guestList: data.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { switchRole } = this.props;
    const { guestList } = this.state;
    return (
      <div>
        <div>
          <button
            onClick={switchRole}
          > back </button>
        </div>
        <h1> ADMIN PAGE </h1>
        <button
          onClick={this.retrieveGuests}
        > refresh list </button>
        <StatList guestList={guestList}/>
        <GuestList guestList={guestList}/>
      </div>
    );
  }
};

export default Admin;
