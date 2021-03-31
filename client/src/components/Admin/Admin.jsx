import React from 'react';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { switchRole } = this.props;
    return (
      <div>
        <div>
          <button
            onClick={switchRole}
          > back </button>
        </div>
        <h1> ADMIN PAGE </h1>
      </div>
    );
  }
};

export default Admin;
