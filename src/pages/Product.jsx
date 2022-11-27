import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { connect } from "react-redux"
import { addReview, addToCart } from "../actions";

import Announcement from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 10px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 8px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  width: 10rem;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin-left: 3.5rem;
`;

const TextArea = styled.textarea`
  flex: 1;
  width: 100%;
  height: 5rem;
  margin: 15px 0;
  margin-bottom: 1rem;
  padding: 5px;
  line-height: 1.2rem;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ReviewBlock = styled.div`
  padding: 3.5rem;
`

const renderInput = (props) => {
  return (
    <div><TextArea onChange={props.input.onChange} placeholder={props.placeholder} /></div>
  )
}

const Product = ({addReview, reviews, products, addToCart}) => {
  const [review, setReview] = useState('')
  const [product, setProduct] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    setProduct(products.find((item) => item.id === parseInt(id)))
  }, [])

  const submitReview = (e) => {
    e.preventDefault()
    addReview({
      id: parseInt(id),
      review
    })
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product ? product.img : ''} />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Form onSubmit={submitReview} className="LoginForm">
        <TextArea name = "username" value={review} onChange={(e) => setReview(e.target.value)}  placeholder="username" />
        <Button>Submit Review</Button>
      </Form>
      <ReviewBlock>
      <Title>Reviews</Title>
      {reviews.map((review, idx) => {
        if (review.id === parseInt(id)) {
          return (
            <div key={idx}>
              <Desc>{review.review}</Desc>
              <Hr />
            </div>
          )
        }
      }
    )}
      </ReviewBlock>
      <Newsletter />
      <Footer />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    products: state.products
  }
}

export default connect(mapStateToProps, {
  addReview,
  addToCart
})(Product);
