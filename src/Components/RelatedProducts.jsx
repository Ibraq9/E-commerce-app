import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';



const RelatedProducts = ({ Category, SubCategory }) => {
    const { products } = useContext(shopContext);
    const [Related, setRelated] = React.useState([]);

    React.useEffect(() => {
        if (products.length > 0 && Category && SubCategory) {
            const filteredProducts = products.filter(item => 
                item.category === Category && 
                item.subCategory === SubCategory
            );
            setRelated(filteredProducts.slice(0, 5));
        }
    }, [products, Category, SubCategory]);

    return (
        <div className='flex flex-col gap-5 px-5 mt-10'>
            <Title text1={'Related '} text2={'Products'} />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Related.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts
