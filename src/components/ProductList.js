import styled from 'styled-components'

const ProductsBox = styled.div`
  display: grid;
  gap: 1.9rem 1.74rem;
  grid-template-columns: repeat(auto-fit, 10.1rem);
  justify-content: center;
  margin-bottom: 10rem;
  padding: 0 1.7rem 0 1.8rem;

  @media only screen and (max-width: 23.4em) {
    padding-left: 1rem;
    padding-right: 1rem;
    column-gap: 1rem;
  }

  @media only screen and (max-width: 21.4em) {
    column-gap: 5rem;
  }
`
const Description = styled.p`
  color: #718596;
`
const Price = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 700;
  margin: .2rem 0;
`
const MinimumQty = styled.span`
  color: #56636D;
`


const ProductList = ({products}) => {
  return (
    <ProductsBox>
      {products.map((product, index) => (
        <div key={index}>
          <img src={product} alt="" />
          <Description>Free sample small tote bag gucci fen...</Description>
          <Price>₦900 - ₦1,500</Price>
          <MinimumQty>MOQ 4 (pieces)</MinimumQty>
        </div>
      ))}
    </ProductsBox>
  )
}

export default ProductList
