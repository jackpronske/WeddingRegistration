import React from 'react';

const PayPal = () => {
  return (
    <div>
      <h4> Too lazy to find a gift? We like (and need...) cash!!! </h4>
      <form
        action="https://www.paypal.com/donate"
        method="post"
        target="_top"
      >
        <input
          type="hidden"
          name="hosted_button_id"
          value="SML5LJXXV28E4"
        />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>

    </div>
  );
}

export default PayPal;
