import React from 'react';

class StatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.countVeggies = this.countVeggies.bind(this);
    this.countSnails = this.countSnails.bind(this);
  }

  countVeggies() {
    const { guestList } = this.props;
    let total = 0;
    for (let i = 0; i < guestList.length; i++){
      if (guestList[i].vegetarian) {
        total++;
      }
    }
    return total;
  }

  countSnails() {
    const { guestList } = this.props;
    let total = 0;
    for (let i = 0; i < guestList.length; i++) {
      if (guestList[i].snail) {
        total++;
      }
    }
    return total;
  }

  render() {
    const { guestList } = this.props;
    const veggies = this.countVeggies();
    const snails = this.countSnails();
    return (
      <div>
        <div> Guests : {guestList.length} </div>
        <div> Vegetarians : {veggies} </div>
        <div> Paper Invitations : {snails} </div>
      </div>
    );
  }
};

export default StatList;
