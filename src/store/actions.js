export const increaseQuantity = (amount) => ({
    type: 'INCREASE_QUANTITY',
    payload: amount // Pass the amount as payload
  });

  export const decreaseQuantity = (amount) => ({
    type: 'DECREASE_QUANTITY',
    payload: amount // Pass the amount as payload
  });
  
  