
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";
import RelatedProducts from "../Components/RelatedProducts";
import { assets } from "../assets/assets.js";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const { products, currency,Add_Cart,Size,setSize} = useContext(shopContext);
  const { productId } = useParams();

  useEffect(() => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setSelectedProduct(product);
    }
  }, [productId, products]); 

  if (!selectedProduct) {
    return <div className="text-center py-20">Loading product details...</div>;
  }



  return (
    <div className="mt-11">
      <div className="gap-10 sm:flex p-5">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full sm:max-w-md object-cover"
        />

        <div className="flex flex-col gap-4 mt-6 sm:mt-0">
          <h1 className="text-3xl font-bold">{selectedProduct.name}</h1>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={assets.star_icon}
                  alt="star rating"
                  className="w-5 h-5"
                />
              ))}
              <img
                src={assets.star_dull_icon}
                alt="star rating"
                className="w-5 h-5"
              />
            </div>
            <span className="text-gray-600">(121 reviews)</span>
          </div>

          <p className="text-2xl font-bold">
            {currency} {selectedProduct.price}
          </p>

          <p className="text-gray-700 max-w-prose">
            {selectedProduct.description}
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Select Size</h2>
            <div className="flex flex-wrap gap-3">
              {selectedProduct.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSize(size)}
                  className={`px-4 py-2 border-2 rounded-md transition-colors
                    ${Size === size
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-400'}
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>Add_Cart(selectedProduct._id,Size)} className="bg-black text-white w-48 h-12 rounded-md mt-6 hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>

          <div className="mt-8 space-y-2 text-sm text-gray-600">
            <p>✓ 100% Egyptian Cotton</p>
            <p>✓ 100% Original Quality</p>
          </div>
        </div>
      </div>

      <hr />

      {/* Description and rates */}
      <div>
        <div className="flex flex-col gap-3 px-5 mt-10">
          <div className="flex gap-3">
            <b>Description</b>
            <p>(121) Review</p>
          </div>

          <div>
            <p>offers premium apparel crafted for modern lifestyles. Our collection blends timeless style with innovative comfort, using sustainably sourced, breathable fabrics designed to adapt to any occasion—from casual outings to professional settings. Each piece emphasizes durability, effortless versatility, and eco-conscious production, ensuring you look polished while minimizing environmental impact. Explore minimalist designs, vibrant textures, and ergonomic fits that prioritize both aesthetics and functionality. Elevate your wardrobe with ethically made, high-quality wear that transitions seamlessly from day to night. Rediscover confidence in clothing built to last. Dress intentionally. Live authentically</p>
          </div>
        </div>
      </div>


      {/* Related Products */}
      <div>
        <RelatedProducts Category={selectedProduct.category} SubCategory={selectedProduct.subCategory}/>
      </div>
    </div>
  );
};

export default Product;