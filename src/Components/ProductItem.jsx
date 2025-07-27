import { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, price, image, name }) => {
    const { currency } = useContext(shopContext);

    return (
        <Link to={`/product/${id}`} className=''>
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300'>
                <div className='w-full h-80 overflow-hidden'>
                    <img
                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                        src={image}
                        alt={name}
                    />
                </div>
                <div className='p-4'>
                    <h3 className='text-lg font-semibold text-gray-800 truncate'>{name}</h3>
                    <p className='text-sm text-gray-500 mt-1'>{currency}{price}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem
