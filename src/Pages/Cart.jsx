import React, { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import CartProduct from "../Components/CartProduct";
import TotalCart from "../Components/TotalCart";

const Cart = () => {

  const {cartItems, products, navigate,DataCart,setDataCart } = useContext(shopContext);

  const check_cart = () => {
    let tempData = [];
    for (const itemsID in cartItems) {
      for (const itemSize in cartItems[itemsID]) {
        if (cartItems[itemsID][itemSize] > 0) {
          tempData.push({
            id: itemsID,
            size: itemSize,
            quantitty: cartItems[itemsID][itemSize]
          })
        }
      }
    }
    setDataCart(tempData);
    console.log(tempData)
  }


  React.useEffect(() => {
    check_cart();
  }, [cartItems])


  return (
    <div className="px-5">
      <div>
        <Title text1={'Your '} text2={'Cart'} />

        <div>
          {
            DataCart.map((item) => {
              const productData = products.find((product) => product._id == item.id)

              return (
                <CartProduct
                  key={item.id}
                  Image1={productData.image}
                  Name1={productData.name}
                  Price1={productData.price}
                  Size1={item.size}
                  countProduct={item.quantitty}
                  ID={item.id}
                />
              )
            })
          }
          <hr className="mt-5" />
        </div>
      </div>


      <div className="flex justify-end">
        <TotalCart />
      </div>


      <div className="flex flex-col items-end ">
        <button onClick={() => navigate('/Placeorder')} className="bg-black text-white w-40 h-10 text-xl mt-10 hover:bg-gray-700">CheckOut</button>
      </div>

    </div>
  )
}

export default Cart

