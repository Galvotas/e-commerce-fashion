import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useCart } from "../contexts/CartContext";
import { checkIfInCart } from "../actions/checkIfInCart";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
  cardMedia: {
    height: "350px",
    backgroundColor: "#F5F5F5",
    backgroundSize: "contain !important",
  },
});

export const ResultCard = ({
  productimg,
  producttitle,
  productprice,
  productid,
  onClick,
  product,
  children,
}) => {
  const classes = useStyles();
  const { dispatch, cartItems } = useCart();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <Card onClick={onClick} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt="Contemplative Reptile"
          image={productimg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="body2">
            {producttitle}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            ${productprice}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => addToCart(product)}
          disabled={checkIfInCart(cartItems, productid) ? true : false}
        >
          {checkIfInCart(cartItems, productid) ? "IN CART" : "ADD TO CART"}
        </Button>
        {children}
      </CardActions>
    </Card>
  );
};
