import { useContext } from "react";
import { ProductContext } from "./context";

export const useProducts = () => {
    const {
        state: {
            productsList,
        },
        actions: {
            getProductById
        }
    } = useContext(ProductContext)

    return {
        productsList,
        getProductById
    }
}


export const useSearch = () => {
    const {
        state: {
            search
        },
        actions: {
            setSearch
        }
    } = useContext(ProductContext)

    return [search, setSearch]
}


export const useFilter = () => {
    const {
        state: {
            filter,
            filtersType
        },
        actions: {
            setFilter
        }
    } = useContext(ProductContext)

    return { filter, setFilter, filtersType }
}