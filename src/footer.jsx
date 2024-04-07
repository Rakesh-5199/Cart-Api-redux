// Footer.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Footer = () => {
  const quantity = useSelector(state => state.quantities);
  let totalQty = 0;
let totalPrice = 0;
quantity.forEach(item => {
  totalQty += item.qty;
  totalPrice += item.qty * item.price;
});
  return (
    <div>
      <h3>Total Quantity: {totalQty }</h3>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Footer;
