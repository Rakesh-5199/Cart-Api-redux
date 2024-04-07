const initialState = {
    // Assuming quantities are tracked per item ID
    quantities: [] // Array to store quantities for each item
  };
  
  const quantityReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_QUANTITY':
        
        const { itemId, qty,price } = action.payload;
        console.log(price,"price")
        const existingItemIndex = state.quantities.findIndex(item => item.itemId === itemId);
        if (existingItemIndex !== -1) {
          // If the item already exists in the array, update its quantity
          const updatedQuantities = [...state.quantities];
          updatedQuantities[existingItemIndex] = {
            itemId: itemId,
            qty: updatedQuantities[existingItemIndex].qty + qty,
            price:price
          };
          return {
            ...state,
            quantities: updatedQuantities
          };
        } else {
          // If the item doesn't exist, add it to the array
          return {
            ...state,
            quantities: [...state.quantities, { itemId: itemId, qty: qty ,price:price}]
          };
        }
      case 'DECREASE_QUANTITY':
        const { itemId: decreaseItemId } = action.payload;
        const decreaseItemIndex = state.quantities.findIndex(item => item.itemId === decreaseItemId);
        if (decreaseItemIndex !== -1) {
          // If the item exists in the array, decrease its quantity
          const updatedQuantities = [...state.quantities];
          updatedQuantities[decreaseItemIndex] = {
            ...updatedQuantities[decreaseItemIndex],
            qty: Math.max(0, updatedQuantities[decreaseItemIndex].qty - 1) // Ensure quantity doesn't go below 0
          };
          return {
            ...state,
            quantities: updatedQuantities
          };
        } else {
          // If the item doesn't exist, return state as is
          return state;
        }
      default:
        return state;
    }
  };
  
  export default quantityReducer;
  