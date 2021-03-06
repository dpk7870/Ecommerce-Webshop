import React from 'react';
import{ Card, CardMedia,CardContent,CardActions,Typography,IconButton} from'@material-ui/core';
import{ AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles.js';

const Product = ({product}) => {
  const classes= useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='product.image ' title={Product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {Product.name}
          </Typography>
          <Typography variant="h5">
            {Product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">{
          product.description}
          </Typography>

      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="ADD TO CART">
          <AddShoppingCart />

        </IconButton>

      </CardActions>
    </Card>
  )
}

export default Product
