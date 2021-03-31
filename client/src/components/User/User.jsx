import React from 'react';
import RegistrationForm from './RegistrationForm';
import axios from 'axios';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };

    this.switchRegistrationForm = this.switchRegistrationForm.bind(this);
    this.postGuestForm = this.postGuestForm.bind(this);
  }

  postGuestForm(form) {
    axios.post('/test', form)
      .then((data) => {
        console.log(data);
        this.setState({
          showForm: false
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  switchRegistrationForm() {
    const { showForm } = this.state;
    this.setState({
      showForm: !showForm
    });
  }

  render() {
    const { showForm } = this.state;
    const { switchRole } = this.props;
    return (
      <div>
        <div>
          <button
            onClick={switchRole}
          > admin </button>
        </div>
        <h1> We're Getting Married! </h1>
        <div>
          <p> Howdy! As most of you already know, Caroline and I are getting married much sooner than we originally planned! </p>
          <p> We decided do a small gathering to actually get hitched on April 20th, 2021, but are inviting all our friends to a celebration of this event a year later! </p>
          <p> If you're interested in coming to the delayed wedding reception on April 20th, 2022 in Portland, OR, please fill out some information via the form below and we'll send out additional details as the time draws closer! </p>
        </div>
        {showForm ?
        <RegistrationForm postGuestForm={this.postGuestForm}/> :
        <button
          onClick={this.switchRegistrationForm}
        > I'd like to attend! </button>}
      </div>
    );
  }
};

export default User;
