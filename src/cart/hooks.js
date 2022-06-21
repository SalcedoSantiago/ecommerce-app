import { useContext } from "react";
import { CartContext } from "./Context";

export const useCart = () => {
    const {
        state: { cart, items },
        actions: {
            add
        }
    } = useContext(CartContext)

    return {
        items,
        cart,
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


export const useCartCoutItems = () => {
    const {
        state: { items },
    } = useContext(CartContext)


    return items.reduce((count, item) => count + item.count, 0);
}
