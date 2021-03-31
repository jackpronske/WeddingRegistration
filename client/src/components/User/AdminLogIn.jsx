import React from 'react';

class AdminLogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
  }

  handlePasswordSubmit(e) {
    e.preventDefault();
    const { checkPassword } = this.props;
    const { password } = this.state;
    checkPassword(password);
  }

  handlePasswordChange(e) {
    const target = e.target;
    const value = target.value;

    this.setState({
      password: value
    });
  }

  render() {
    const { toggleLogInForm } = this.props;

    return (
      <div>
        <form onSubmit={this.handlePasswordSubmit}>
          <label> Password:
            <input
              type="text"
              name="password"
              onChange={this.handlePasswordChange}
            ></input>
            <input
              type="submit"
              value="submit"
            ></input>
          </label>
        </form>
        <button
          onClick={toggleLogInForm}
        > cancel </button>
      </div>
    );
  }
};

export default AdminLogIn;
