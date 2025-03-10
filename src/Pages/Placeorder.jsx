import React, { useContext } from "react";
import TotalCart from "../Components/TotalCart";
import Title from "../Components/Title";
import { shopContext } from "../Context/ShopContext";
import { toast } from "react-toastify";



const Placeorder = () => {

  const [method, setmetod] = React.useState('Visa');
  const { navigate } = useContext(shopContext);
  const [formData, setformData] = React.useState({
    first_name: "",
    Last_name: "",
    email: "",
    Password: "",
    Country: "",
    City: "",
    ZipCode: "",
    Street: "",
    Phone: "",
  });

  // Handle the change in input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };




  const PlaceOrderClicked = (e) => {
    e.preventDefault();
   
    const requiredFields = ['first_name', 'Last_name', 'email', 'Password', 'Country', 'City', 'Street'];

   
    const numberFieldValid = formData.phone !== "" && formData.zipCode !== "";
    const allFieldsValid = requiredFields.every(field => {
      const value = formData[field];
      return typeof value === 'string' && value.trim() !== '';
    });

    // If all fields are valid and numberFieldValid is true, navigate to /Orders
    if (allFieldsValid && numberFieldValid) {
      navigate('/Orders');
      toast.success("The request was completed successfully");
    } else {
      toast.error("First must fill all delivery Feilds");
    }
  };




  return (
    <div>
      <div className="flex justify-center">
        <Title text1={'Place '} text2={'Order'} />
      </div>


      <div className="flex flex-col sm:flex sm:flex-row sm:justify-between w-full ">
        <div className="px-5 sm:w-1/2 ">
          <Title text1={'delivery '} text2={'Information'} />
          <form className="sm:w-3/4" onSubmit={PlaceOrderClicked}>
            <div className="w-full flex gap-3">
              <input className="w-1/2 h-8 outline px-3" name="first_name" value={formData.first_name} onChange={handleInputChange} type="text" placeholder="Enter First Name" />
              <input className="w-1/2 h-8 outline px-3" name="Last_name" value={formData.Last_name} onChange={handleInputChange} type="text" placeholder="Enter Last Name" />
            </div>

            <div className="flex flex-col w-full my-2">
              <input className="w-auto h-8 outline px-3" name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Enter email" />
              <input className="w-auto h-8 outline my-2 px-3" name="Password" value={formData.Password} onChange={handleInputChange} type="password" placeholder="Enter Password" />
            </div>


            <div className="flex gap-2">
              <input className="w-1/2 outline h-8 px-3" name="Country" value={formData.Country} onChange={handleInputChange} type="text" placeholder="country" />
              <input className="w-1/2 outline h-8 px-3" name="City" value={formData.City} onChange={handleInputChange} type="text" placeholder="city" />
            </div>

            <div className="flex gap-2 my-2">
              <input className="w-1/2 outline h-8 px-3" name="ZipCode" value={formData.ZipCode} onChange={handleInputChange} type="number" placeholder="Zipcode" />
              <input className="w-1/2 outline h-8 px-3" name="Street" value={formData.Street} onChange={handleInputChange} type="text" placeholder="street" />
            </div>

            <div className="flex flex-col">
              <input className="w-auto outline h-8 outline px-3" name="Phone" value={formData.Phone} onChange={handleInputChange} type="number" placeholder="Enter Phone" />

              <div className="flex flex-col mt-3">
                <p>(optional)</p>
                <input className="w-auto outline h-8 my-2 outline px-3" type="text" placeholder="Archaeological landmark" />
              </div>

              <div className="flex justify-center cursor-pointer mt-5">
                <button className="bg-black text-white text-xl p-2 w-36 h-12 hover:bg-gray-700">Place Order</button>
              </div>
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

        </div>

      </div>

    </div>
  )
}

export default Placeorder
