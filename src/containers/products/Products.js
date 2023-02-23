import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import "../../stylesheets/products.css";
import { Container } from "@mui/system";

const Products = () => {
  const products = useSelector((state) => state.products);

  let displayProducts = null;
  if (Object.keys(products.error).length) {
    displayProducts = <div>There was an error loading products</div>;
  }

  if (products.data.length && !products.isLoading) {
    displayProducts = [];
    for (let product of products.data) {
      displayProducts.push(
        <ProductCard key={`${product.id}+${product.name}`} product={product} />
      );
    }
  }

  return (
    <Container>
      <Grid
        id="product-page"
        container
        justifyContent="center"
        direction="row"
        spacing={4}
      >
        {displayProducts}
      </Grid>
    </Container>
  );
};

export default Products;
