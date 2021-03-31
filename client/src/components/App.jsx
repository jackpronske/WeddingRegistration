import React from 'react';
import Admin from './Admin/Admin';
import User from './User/User';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdmin: false,
    };
    this.switchRole = this.switchRole.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  checkPassword(entry) {
    if (entry === 'banana123') {
      this.switchRole();
    } else {
      alert('Incorrect Password, Try Again')
    }
  }

  switchRole() {
    const { showAdmin } = this.state;
    this.setState({
      showAdmin: !showAdmin
    });
  }

  render() {
    const { showAdmin } = this.state;
    return (
      <div>
        {showAdmin ?
          <Admin
            switchRole={this.switchRole}
          /> :
          <User
            switchRole={this.switchRole}
            checkPassword={this.checkPassword}
          />}
      </div>
    );
  }
};

export default App;
