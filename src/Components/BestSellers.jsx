
import React, { useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const BestSellers = () => {
    const { products } = useContext(shopContext);
    const [BestSellers, SetBestSellers] = React.useState([]);

    React.useEffect(() => {
        const BEST_SELLERS = products.filter((item) => item.bestseller);
        SetBestSellers(BEST_SELLERS);
    }, [products]); // Added products to dependency array

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300" />
                        <Title 
                            text1={'Best'} 
                            text2={'Sellers'} 
                            className="text-4xl sm:text-5xl"
                        />
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300" />
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Customer favorites! Explore our most-loved products that everyone's talking about. 
                        These top-rated items are flying off the shelves - don't miss out!
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {BestSellers.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BestSellers;