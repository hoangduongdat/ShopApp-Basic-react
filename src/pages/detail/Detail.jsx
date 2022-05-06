import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.scss'
import productData from './../../assets/fake-data/products';
import { CartStore } from './../../context/CartContext';


const Detail = () => {
    const descriptionRef = useRef()
    const { slug } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('white')
    const [size, setSize] = useState('s')
    //get product
    const product = useMemo(() => {
        return productData.getProductBySlug(slug)
    }, [slug])

    useEffect(() => {
        descriptionRef.current.innerHTML = product.description;
    }, [product.description])

    const handleSubQuantity = () => {
        setQuantity(pre => pre > 1 ? pre - 1 : pre)
    }
    const handlePlusQuantity = () => {
        setQuantity(pre => pre + 1)
    }

    const { products, setProducts } = useContext(CartStore)

    const handleAddToCart = () => {

        const productCart = {
            title: product.title,
            price: product.price,
            quantity: quantity,
            image: product.image01,
            size: size,
            color: color
        }
        const newProduct = products.find(product =>
            product.title === productCart.title &&
            product.size === productCart.size &&
            product.color === productCart.color
        )
        if (newProduct) {
            newProduct.quantity++
            setProducts([...products])
        } else {
            setProducts(pre => [...pre, productCart])
        }
        alert("Thêm vào giỏ hàng thành công. vui lòng kiểm tra giỏ hàng")
    }


    return (
        <div className="allContent">
            <div className="detail container">
                <div className="detail-left">
                    <div className="detail-left__image" style={{ backgroundImage: `url('.${product.image01}')` }}></div>
                </div>
                <div className="detail-right">
                    <span className="detail-right__title">{product.title}</span>
                    <div className="detail-right__rating">
                        <span>Rated:</span>
                        <div>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <p className="detail-right__description" ref={descriptionRef}>
                        {product.description}
                    </p>
                    <span className="detail-right__price">Price: ${product.price}</span>
                    <div className="detail-right__quantity">
                        <span className="detail-right__quantity-btn" onClick={handleSubQuantity}>
                            -
                        </span>
                        <span className="detail-right__quantity-text">{quantity}</span>
                        <span className="detail-right__quantity-btn" onClick={handlePlusQuantity}>
                            +
                        </span>
                    </div>

                    <div className="detail-right__color">
                        <p>Chọn màu:</p>
                        {product.colors.map((item, index) =>
                            <div
                                key={index}
                                style={{ backgroundColor: item }}
                                className={color === item ? 'active' : ''}
                                onClick={() => setColor(item)}
                            >
                            </div>
                        )}
                    </div>
                    <div className="detail-right__size">
                        <p>Chọn size:</p>
                        {product.size.map((item, index) =>
                            <span
                                key={index}
                                className={item === size ? 'active' : ''}
                                onClick={() => setSize(item)}
                            >
                                {item}
                            </span>
                        )}
                    </div>
                    <span className="detail-right__total">Total: ${product.price * quantity}</span>
                    <div>
                        <button className="detail-right__btn" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <span className="detail-header">Mô tả chi tiết:</span>
                <span className="detail-text" ref={descriptionRef}></span>
            </div>
        </div>
    );
};

export default Detail;