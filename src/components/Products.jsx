import { useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({ cat, sort, filters }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />
      })}
    </Container>
  )
}

export default Products
