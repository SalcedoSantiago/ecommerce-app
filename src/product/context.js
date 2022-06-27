import { useState, createContext, useEffect, useMemo } from "react";
import { data } from './api';

const ProductContext = createContext({});

const filtersType = [
    'default',
    'lowest',
    'highest',
]

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('default');
    const [search, setSearch] = useState('');
    const total = products.length;

    useEffect(() => {
        setTimeout(() => {
            const productsItems = JSON.parse(window.localStorage.getItem("products"));
            if (Boolean(productsItems.length)) {
                setProducts(productsItems);
            } else {
                window.localStorage.setItem("products", JSON.stringify(data));
                setProducts(data.sort(({ name }) => name))
            }
        }, 500)
    }, [])


    const productsList = useMemo(() => {
        const productFilter = search && products.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())) || products;
        switch (filter) {
            case 'lowest':
                return [...productFilter].sort((a, b) => a.price - b.price);
            case 'highest':
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
            products,
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

