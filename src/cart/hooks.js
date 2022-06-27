import { useContext } from "react";
import { CartContext } from "./Context";

export const useCart = () => {
    const {
        state: { cart, items, total },
        actions: {
            add,
            increase,
            remove,
            removeAll,
            decrease
        }
    } = useContext(CartContext)

    return {
        items,
        cart,
        total,
        add,
        increase,
        decrease,
        remove,
        removeAll
    }
}


export const useCartCountItems = () => {
    const {
        state: { items },
    } = useContext(CartContext)

    return items.reduce((count, item) => count + item.count, 0);
}
