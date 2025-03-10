import React, { createContext } from "react";
import { products } from '../assets/assets';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const shopContext = createContext();

const ShopContextProvider = ({children}) => {
    const currency = '$';
    const delivery_fee = 10;
    const [showSeach, setShowSearch] = React.useState(false);
    const [Size, setSize] = React.useState('');
    const [search, setSearch] = React.useState("");
    const [cartItems, setCartItems] = React.useState({});
    const [DataCart, setDataCart] = React.useState([]);
    const navigate=useNavigate();


    const Add_Cart = async (itemID, itemSize) => {

        let CartData = structuredClone(cartItems);

        if (!Size) {
            toast.error("Sorry, choose the size first");
            return;
        }

        if (CartData[itemID]) {
            if (CartData[itemID][itemSize]) {
                CartData[itemID][itemSize] += 1;
            }
            else {
                CartData[itemID][itemSize] = 1;
            }
        } else {
            CartData[itemID] = {};
            CartData[itemID][itemSize] = 1;
        }

        setCartItems(CartData);
    }


    const get_Cart_Count = () => {
        let count = 0;
        for (let items in cartItems)
            for (let item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        count += cartItems[items][item];
                    }
                } catch (e) {
                    alert(e);
                }
            }
        return count;
    }

    const updateQuantity = (itemID, itemSize, quantitty) => {
        let copy = structuredClone(cartItems);
        copy[itemID][itemSize] = quantitty;
        setCartItems(copy);
    }

    const get_TotalCart = () => {
        let Total = 0;
        for (let items in cartItems) {
            for (let item in cartItems[items]) {
                const itemInfo = products.find((product) => product._id === items)

                try {
                    if (cartItems[items][item] > 0) {
                        Total += itemInfo.price * cartItems[items][item];
                    }
                } catch (e) {
                    alert(e);
                }
            }
        }

        return Total;
    }


    const value = {
        products, currency, delivery_fee, showSeach,
        setShowSearch, search, setSearch,
        cartItems, Add_Cart, Size, setSize, updateQuantity, 
        get_Cart_Count,get_TotalCart,navigate,DataCart,setDataCart
    }

    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    );

}

export default ShopContextProvider;


