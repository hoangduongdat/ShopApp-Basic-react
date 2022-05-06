import React from 'react';

import productData from './../../assets/fake-data/products'
import ListProduct from './../../components/listProduct/ListProduct';

const Products = () => {
    return (
        <div className="product allContent">
            <div className="container">
                <ListProduct products={productData.getAllProducts()} title="Tất cả sản phẩm trong cửa hàng" />

            </div>
        </div>
    );
};

export default Products;