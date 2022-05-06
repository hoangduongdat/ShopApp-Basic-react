import React from 'react';
import { Link } from 'react-router-dom';
import './cardProduct.scss'

const CardProduct = ({ product }) => {
    return (
        <Link to={`/detail/${product.slug}`} className="cardProduct">
            <div className="cardProduct-images">
                <div className="cardProduct-images__first" style={{ backgroundImage: `url('${product.image01}')` }}></div>
                <div className="cardProduct-images__second" style={{ backgroundImage: `url('${product.image02}')` }}></div>
            </div>
            <span className="cardProduct-name">{product.title}</span>
            <div className="cardProduct-bottom">
                <span className="cardProduct-bottom__price">Giá: {product.price}</span>
                <span className="cardProduct-bottom__icon">
                    <i className='bx bxs-cart-add' ></i>
                    <span>add cart</span>
                </span>

            </div>
        </Link>
    );
};

export default CardProduct;