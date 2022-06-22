import { useState, createContext, useMemo } from "react";
import produce from "immer";


const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState({});
    const [isModalOpen, toggleModal] = useState(false);
    const items = useMemo(() => [].concat(...Object.values(cart)), [cart]);
    const total = items.reduce((count, item) => count + item.count, 0);

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
        if (!cart[id]) return

        setCart(produce((cart) => {
            delete cart[id]
        }))
    }

    const increase = (id) => {
        if (!cart[id]) return

        setCart(produce((cart) => {
            cart[id].count++
        }))
    }

    const decrease = (id) => {
        if (!cart[id]) return

        setCart(produce((cart) => {
            cart[id].count--
        }))
    }

    const value = {
        state: {
            cart,
            items,
            isModalOpen,
            total
        },
        actions: {
            add,
            remove,
            increase,
            decrease,
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

