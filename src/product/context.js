import { useState, createContext, useEffect, useMemo } from "react";
import { data } from './api';

const ProductContext = createContext({});

const filtersType = [
    'low',
    'high',
    'default'
]

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('low');
    const [search, setSearch] = useState('');
    const total = products.length;

    useEffect(() => {
        setTimeout(() => {
            setProducts(data)
        }, 500)
    }, [])


    const productsList = useMemo(() => {
        const productFilter = search && products.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())) || products;
        switch (filter) {
            case 'low':
                return [...productFilter].sort((a, b) => a.price - b.price);
            case 'high':
                return [...productFilter].sort((a, b) => b.price - a.price);
            case 'default':
            default:
                return productFilter;
        }
    }, [products, filter, search])



    const getProductById = (_id) => {
        const product = products.filter(({ id }) => id == _id)[0];
        return product;
    }

    const value = {
        state: {
            productsList,
            total,
            filtersType,
            filter,
            search
        },
        actions: {
            setFilter,
            setSearch,
            getProductById
        }
    }



    return (
        <ProductContext.Provider
            value={value}
        >
            {children}
        </ProductContext.Provider>
    );
}


export {
    ProductContext,
    ProductProvider
}

