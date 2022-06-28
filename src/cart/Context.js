import { useState, createContext, useMemo } from "react";
import produce from "immer";

const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState({});
    const items = useMemo(() => [].concat(...Object.values(cart)), [cart]);
    const total = items.reduce((count, item) => count + (item.product.price * item.count), 0);

    const add = (product, count = false) => {
        if (cart[product.id]) {
            increase(product.id, count)
        } else {
            setCart(produce((cart) => {
                cart[product.id] = {
                    id: product.id,
                    product,
                    count: count || 1,
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

    const increase = (id, count = false) => {
        if (!cart[id]) return

        setCart(produce((cart) => {
            cart[id].count = count ? cart[id].count + count : cart[id].count + 1;
        }))
    }

    const decrease = (id) => {
        if (!cart[id]) return

        if ((cart[id].count - 1) === 0) {
            remove(id);
        } else {
            setCart(produce((cart) => {
                cart[id].count--
            }))
        }
    }

    const removeAll = () => {
        setCart({})
    }

    const value = {
        state: {
            cart,
            items,
            total
        },
        actions: {
            add,
            remove,
            increase,
            decrease,
            removeAll
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

