import { useContext } from "react";
import { CartContext } from "./Context";

export const useCart = () => {
    const {
        state: { cart, items, total },
        actions: {
            add,
            increase,
            decrease
        }
    } = useContext(CartContext)

    return {
        items,
        cart,
        total,
        increase,
        decrease,
        add
    }
}


export const useModalCart = () => {
    const {
        state: { isModalOpen },
        actions: {
            toggleModal
        }
    } = useContext(CartContext)

    return {
        isModalOpen,
        toggleModal
    }
}


export const useCartCountItems = () => {
    const {
        state: { items },
    } = useContext(CartContext)

    return items.reduce((count, item) => count + item.count, 0);
}
