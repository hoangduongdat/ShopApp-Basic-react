import React from 'react';
import CardProduct from '../cardProduct/CardProduct';
import './listProduct.scss';

const ListProduct = ({ products, title }) => {
    return (
        <div className="listProduct">
            <span className="listProduct-title">{title}</span>
            <div className="listProduct-content">
                {products.map(product => <CardProduct product={product} />)}
            </div>
        </div>
    );
};

export default ListProduct;