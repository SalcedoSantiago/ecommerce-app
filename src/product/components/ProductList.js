import { Grid } from '@chakra-ui/react'
import ProductCard from './ProductCard';


const ProductList = ({ products }) => {
    return (
        <Grid gap={6} templateColumns="repeat(auto-fill, minmax(256px, 1fr))" width="100%">
            {products.map((product) =>
                <ProductCard
                    key={product.id}
                    product={product}
                />
            )}
        </Grid>
    )
}

export default ProductList