import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './store/actions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

const DisplayComponent = ({ product }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => {
    // Find the quantity for the current product ID from state
    const itemQuantity = state.quantities.find(item => item.itemId === product.id);
    return itemQuantity ? itemQuantity.qty : 0; // Return quantity if found, otherwise return 0
  });

  const handleIncrease = () => {
    dispatch(increaseQuantity({ itemId: product.id, qty: 1,price: product.price}));
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      dispatch(decreaseQuantity({ itemId: product.id }));
    }
  };

  return (
    <Grid sx={{margin: '67px'}}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {product.title}
          </Typography>
          <img src={product.thumbnail} alt={product.title} style={{ width: '112px', marginTop: '10px', marginBottom: '10px' }} />
          <Typography color="text.secondary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {product.description}
          </Typography>
          <div>
            <IconButton aria-label="decrease quantity" onClick={handleDecrease}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1" display="inline">
              {quantity}
            </Typography>
            <IconButton aria-label="increase quantity" onClick={handleIncrease}>
              <AddIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DisplayComponent;
