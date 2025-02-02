import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, price, image, name }) => {

    const { currency } = useContext(shopContext);

    return (
        <Link to={`/product/${id}`}>
                <div className='flex flex-col hover:scale-105 transition-all'>
                    <div>
                        <img className='h-80' src={image} alt='productImage' />
                    </div>
                    <p>{name}</p>
                    <p>{currency}{price}</p>
                </div>
        </Link>
    )
}

export default ProductItem
