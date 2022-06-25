


export const getProductById = (products, _id) => {
    const product = products.filter(({ id }) => id == _id)[0];
    return product;
}