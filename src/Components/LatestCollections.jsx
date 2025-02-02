
import React from 'react';
import { useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const LatestCollections = () => {
    const { products } = useContext(shopContext);
    const [latestProducts, setLatestProducts] = React.useState([]);

    React.useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]); // Added products to dependency array

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <Title
                            text1={'Latest '}
                            text2={'Collections'}
                            className="px-8"
                        />
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover our curated selection of fresh arrivals and contemporary styles.
                        Refresh your wardrobe with these season's essential pieces.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {latestProducts.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <Link to={'/Collections'}>
                        <button className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300">
                            View All Collections
                            <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default LatestCollections;