import { useState, createContext, useMemo } from "react";
import produce from "immer";
import shortid from "shortid";


const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState({});
    const [isModalOpen, toggleModal] = useState(false);
    const items = useMemo(() => [].concat(...Object.values(cart)), [cart]);

    const add = (product) => {
        if (cart[product.id]) {
            increase(product.id)
        } else {
            setCart(produce((cart) => {
                cart[product.id] = {
                    id: product.id,
                    product,
                    count: 1,
                }
            }
            ))
        }
    }

    const remove = (id) => {

    }

    const increase = (id) => {
        setCart(produce((cart) => {
            cart[id].count++
        }))
    }

    const value = {
        state: {
            cart,
            items,
            isModalOpen,
        },
        actions: {
            add,
            remove,
            toggleModal
        }
    }
    return (
        <CartContext.Provider
            value={value}
        >
            {children}
        </CartContext.Provider>
    );
}


export {
    CartContext,
    CartProvider
}

