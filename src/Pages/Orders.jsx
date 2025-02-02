import React, { useContext } from "react";
import Title from "../Components/Title";
import { shopContext } from "../Context/ShopContext";

const Orders = () => {
  const { DataCart, products, currency } = useContext(shopContext);


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Title text1={'My '} text2={'Orders'} />
      
      <div className="mt-8 space-y-6">
        {DataCart.map((item) => {
          const INFO = products.find((product) => product._id === item.id);
          
          return (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                {/* Product Info */}
                <div className="flex flex-1 gap-6">
                  <img 
                    className="w-24 h-24 object-contain rounded-lg bg-gray-50 p-2 border" 
                    src={INFO.image} 
                    alt={INFO.name} 
                  />
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{INFO.name}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <p>{currency}{INFO.price}</p>
                      <p>Quantity: {item.quantitty}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      Ordered on:{" "}
                      {new Date(INFO.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                {/* Status and Action */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium text-green-700">Ready To Ship</span>
                  </div>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;