/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Card, CardBody, Image, Stack, Text, ButtonGroup, Button } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../api/axios.js"

export default function Product({ id }) {
  const [products, setProducts] = useState([])

  const productsGet = async () => {
    try {
      const data = await getProducts(id)
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    productsGet()
  }, [])

  return (
    <div className="px-10 grid grid-cols-6 gap-4 my-5">
      {products.map((product) => (
        <Card maxW="sm" key={product.id}>
          <CardBody>
            <Image src={product.urlImage} alt="Baju Gamis Syari Wanita" borderRadius="lg" height="170" className="mx-auto w-full" />
            <Stack mt="6" spacing="3">
              <p size="xs">{product.title}</p>
              <Text className="font-semibold">Rp. {product.price}</Text>
            </Stack>
          </CardBody>
          <ButtonGroup spacing="" className="mx-auto" mb="6">
            <a href={product.linkProduct} target="_blank" rel="noreferrer">
              <Button variant="solid" colorScheme="blue" fontSize="xs">
                Buy now
              </Button>
            </a>
          </ButtonGroup>
        </Card>
      ))}
    </div>
  )
}
