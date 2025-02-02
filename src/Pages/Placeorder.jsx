import React, { useContext } from "react";
import TotalCart from "../Components/TotalCart";
import Title from "../Components/Title";
import { shopContext } from "../Context/ShopContext";



const Placeorder = () => {

  const [method, setmetod] = React.useState('Visa');
  const { navigate } = useContext(shopContext);

  console.log(method);
  return (
    <div>
      <div className="flex justify-center">
        <Title text1={'Place '} text2={'Order'} />
      </div>


      <div className="flex flex-col sm:flex sm:flex-row sm:justify-between w-full ">
        <div className="px-5 sm:w-1/2 ">
          <Title text1={'delivery '} text2={'Information'} />
          <form className="sm:w-3/4 ">
            <div className="w-full flex gap-3">
              <input className="w-1/2 h-8 outline px-3" type="text" placeholder="Enter First Name" />
              <input className="w-1/2 h-8 outline px-3" type="text" placeholder="Enter Last Name" />
            </div>

            <div className="flex flex-col w-full my-2">
              <input className="w-auto h-8 outline px-3" type="email" placeholder="Enter email" />
              <input className="w-auto h-8 outline my-2 px-3" type="password" placeholder="Enter Password" />
            </div>


            <div className="flex gap-2">
              <input className="w-1/2 outline h-8 px-3" type="text" placeholder="country" />
              <input className="w-1/2 outline h-8 px-3" type="text" placeholder="city" />
            </div>

            <div className="flex gap-2 my-2">
              <input className="w-1/2 outline h-8 px-3" type="text" placeholder="Zipcode" />
              <input className="w-1/2 outline h-8 px-3" type="text" placeholder="street" />
            </div>

            <div className="flex flex-col">
              <input className="w-auto outline h-8 outline px-3" type="number" placeholder="Enter Phone" />
              <input className="w-auto outline h-8 my-2 outline px-3" type="number" placeholder="Archaeological landmark" />
            </div>


          </form>
        </div>


        <div className="flex flex-col w-full sm:w-1/3 px-5">
          <TotalCart />
          <div className="">
            <div className="flex gap-16 mt-10 ">

              <div className="">
                <div className={`${method === 'Mada' ? 'bg-green-700' : 'hidden'} w-4 h-4 rounded-full`}></div>
                <img onClick={() => setmetod('Mada')} className={`sm:w-24 sm:h-14 w-16 h-12 cursor-pointer`} src="src\assets\My_assets\Mada.png.webp" alt="" />
              </div>

              <div className="">
                <div className={`${method === 'Visa' ? 'bg-green-700' : 'hidden'} rounded-full w-4 h-4`}></div>
                <img onClick={() => setmetod('Visa')} className={`sm:w-24 sm:h-14 w-16 h-12 cursor-pointer`} src="src\assets\My_assets\Visa-Logo.png" alt="" />
              </div>

              <div className="">
                <div className={`rounded-full w-4 h-4 ${method === 'Barq' ? 'bg-green-700' : 'hidden'}`}></div>
                <img onClick={() => setmetod('Barq')} className={`sm:w-24 sm:h-14 w-16 h-12 cursor-pointer`} src="src\assets\My_assets\barq.png" alt="" />
              </div>

            </div>
          </div>

          <div className="flex justify-center cursor-pointer mt-5">
            <button onClick={() => navigate('/Orders')} className="bg-black text-white text-xl p-2 w-36 h-12 hover:bg-gray-700">Place Order</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Placeorder
