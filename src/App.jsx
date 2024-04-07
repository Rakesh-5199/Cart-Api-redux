// App.js
import React from 'react';
import Provider from './Provider';
import Footer from './footer';
import DisplayComponent from './home'
import productsData from './product.json';
import Grid from "@mui/material/Grid";



const App = () => {

  return (
    <Grid>
        <Provider>
      <Grid >
      {productsData.products.map(product => (
        <DisplayComponent key={product.id} product={product} />
      ))}

      </Grid>
   
    <Footer />
    </Provider>
    </Grid>
  
  );
};

export default App;
