import React from 'react';
import RegistrationForm from './RegistrationForm';
import PayPal from './PayPal';
import AdminLogIn from './AdminLogIn';
import axios from 'axios';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      logAdmin: false,
    };

    this.switchRegistrationForm = this.switchRegistrationForm.bind(this);
    this.postGuestForm = this.postGuestForm.bind(this);
    this.toggleLogInForm = this.toggleLogInForm.bind(this);
  }

  toggleLogInForm() {
    const { logAdmin } = this.state;
    this.setState({
      logAdmin: !logAdmin
    });
  }

  postGuestForm(form) {
    axios.post('/test', form)
      .then((data) => {
        console.log(data);
        this.setState({
          showForm: false
        }, () => {
          alert('Successfully Submitted!\nSee you at the Party!');
        });
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong, try again shortly');
      });
  }

  switchRegistrationForm() {
    const { showForm } = this.state;
    this.setState({
      showForm: !showForm
    });
  }

  render() {
    const { showForm, logAdmin } = this.state;
    const { switchRole, checkPassword } = this.props;
    return (
      <div>
        <div>
          {logAdmin ?
            <AdminLogIn
              toggleLogInForm={this.toggleLogInForm}
              checkPassword={checkPassword}
            /> :
            <button
              onClick={this.toggleLogInForm}
            > admin </button>
          }
        </div>
        <h1> We're Getting Married! </h1>
        <div>
          <p> Howdy! As you might not know, Caroline and Jack are getting married much sooner than they originally planned! </p>
          <p> We decided do a small gathering to actually get hitched on April 20th, 2021, but are inviting all our friends to a celebration of this event a year later! </p>
          <p> If you're interested in coming to the delayed wedding reception on April 20th, 2022 in Portland, OR, please fill out some information via the form below and we'll send out additional details as the time draws closer! </p>
        </div>
        {showForm ?
        <RegistrationForm
          postGuestForm={this.postGuestForm}
          switchRegistrationForm={this.switchRegistrationForm}
        /> :
        <button
          onClick={this.switchRegistrationForm}
        > I'd like to attend! </button>}
        <PayPal />
      </div>
    );
  }
};

export default User;
