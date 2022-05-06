import React, { useContext, useState } from 'react';
import './cart.scss'
import { CartStore } from './../../context/CartContext';


const Cart = () => {
    const { products, setProducts } = useContext(CartStore)

    const handleSubQuantity = (product) => {
        console.log(product)
        if (product.quantity < 2) return
        product.quantity--;
        setProducts([...products])
    }
    const handlePlusQuantity = (product) => {
        product.quantity++;
        setProducts([...products])
    }
    const handleDeleteProduct = (product) => {
        const index = products.indexOf(product)
        products.splice(index, 1);
        setProducts([...products])
    }
    return (
        <div className="allContent">
            <div className="cart container">
                {products.map(product => (
                    <div className="cart-item">
                        <div className="cart-item__img" style={{ backgroundImage: `url('${product.image}')` }}></div>
                        <div className="cart-item__info">
                            <span className="cart-item__info-name"> {product.title}</span>
                            <span className="cart-item__info-color"> Color: {product.color}</span>
                            <span className="cart-item__info-size"> Size: {product.size}</span>
                            <span className="cart-item__info-price"> ${product.price}</span>
                            <div className="cart-item__info-quantity">
                                <span onClick={() => handleSubQuantity(product)}>-</span>
                                <span>{product.quantity}</span>
                                <span onClick={() => handlePlusQuantity(product)}>+</span>
                            </div>
                            <span
                                className="cart-item__info-delete"
                                onClick={() => handleDeleteProduct(product)}>
                                <i class='bx bxs-trash'></i>
                            </span>
                        </div>
                    </div>
                ))}

                <div className="cart-total">
                    <span>Tổng tiền : ${products.reduce((acc, product) => (acc + product.price * product.quantity), 0)}</span>
                    <button className="cart-total-btn">Đặt Hàng</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;