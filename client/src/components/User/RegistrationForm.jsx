import React from 'react';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddressField: false,
      firstName: '',
      lastName: '',
      email: '',
      vegetarian: false,
      snail: false,
      streetOne: '',
      streetTwo: '',
      cityState: '',
      zip: ''
    };

    this.toggleAddressField = this.toggleAddressField.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    const { postGuestForm } = this.props;
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      vegetarian,
      snail,
      streetOne,
      streetTwo,
      cityState,
      zip,
      showAddressField,
    } = this.state;

    const guestForm = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      vegetarian: vegetarian,
      snail: snail,
    };

    if (showAddressField) {
      guestForm.streetOne = streetOne;
      guestForm.streetTwo = streetTwo;
      guestForm.cityState = cityState;
      guestForm.zip = zip;
    }

    postGuestForm(guestForm);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  toggleAddressField() {
    const { showAddressField } = this.state;
    this.setState({
      showAddressField: !showAddressField
    });
  }

  render() {
    const { showAddressField } = this.state;
    const { switchRegistrationForm } = this.props;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label> First Name:
            <input
              type="text"
              name="firstName"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label> Last Name:
            <input
              type="text"
              name="lastName"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label> Email:
            <input
              type="text"
              name="email"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label> Vegetarian:
            <input
            type="checkbox"
            name="vegetarian"
            onChange={this.handleInputChange}
          ></input>
          </label>
          <label> Snail Mail Invitation:
            <input
              type="checkbox"
              name="snail"
              onChange={(e) => {
                this.handleInputChange(e);
                this.toggleAddressField();
              }}></input>
          </label>
          {showAddressField ?
          <>
            <label> Address line 1:
              <input
                type="text"
                name="streetOne"
                onChange={this.handleInputChange}
              ></input>
            </label>
            <label> Address line 2:
              <input
                type="text"
                name="streetTwo"
                onChange={this.handleInputChange}
              ></input>
            </label>
            <label> City/State:
              <input
                type="text"
                name="cityState"
                onChange={this.handleInputChange}
              ></input>
            </label>
            <label> Zip Code
              <input
                type="text"
                name="zip"
                onChange={this.handleInputChange}
              ></input>
            </label>
          </>
          : null}
          <input type="submit" value="See You Soon!"></input>
          <button onClick={switchRegistrationForm}> Cancel </button>
        </form>
      </div>
    );
  }
};

export default RegistrationForm;