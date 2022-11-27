import styled from "styled-components";
import { Link } from "react-router-dom";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cartItems}) => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <Product item={item} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;