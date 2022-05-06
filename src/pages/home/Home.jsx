import React from 'react';
import './home.scss'

import productData from './../../assets/fake-data/products'
import ListProduct from './../../components/listProduct/ListProduct';

const Home = () => {
    return (
        <div className="home allContent">
            <div className="container">
                <ListProduct products={productData.getProducts(4)} title="Top sản phẩm bán chạy trong tuần" />
                <ListProduct products={productData.getProducts(8)} title="Sản phẩm mới nhất" />
            </div>
        </div>
    );
};

export default Home;