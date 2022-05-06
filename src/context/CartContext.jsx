import { useState, createContext } from "react"

export const CartStore = createContext(null)

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    return (
        <CartStore.Provider value={{ products: products, setProducts: setProducts }} >
            {children}
        </CartStore.Provider>
    )
}
export default CartProvider

