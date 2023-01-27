import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axiosInstance from '../utils/axiosInstance'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({ cat, sort, filters }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosInstance.get('/products')
        console.log('res', res)
        // const data = await res.json()
      } catch (error) {}
    }
    getProducts()
  }, [cat])
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />
      })}
    </Container>
  )
}

export default Products
