import React, { useContext } from "react";
import TotalCart from "../Components/TotalCart";
import Title from "../Components/Title";
import { shopContext } from "../Context/ShopContext";
import { toast } from "react-toastify";
import VisaLogo from "../assets/My_assets/Visa-Logo.png";
import MadaLogo from "../assets/My_assets/Mada.webp";
import BarqLogo from "../assets/My_assets/barq.png";


const Placeorder = () => {
  const [method, setmetod] = React.useState("Visa");
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
    const numberFieldValid = formData.Phone !== "" && formData.ZipCode !== "";
    const allFieldsValid = requiredFields.every(field => formData[field]?.trim() !== "");

    if (allFieldsValid && numberFieldValid) {
      navigate('/Orders');
      toast.success("The request was completed successfully");
    } else {
      toast.error("Please fill in all required delivery fields.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-10">
          <Title text1={"Place "} text2={"Order"} />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Delivery Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md w-full lg:w-2/3">
            <Title text1={"Delivery "} text2={"Information"} />
            <form onSubmit={PlaceOrderClicked} className="space-y-4 mt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="First Name"
                  className="input-field p-1"
                />
                <input
                  name="Last_name"
                  value={formData.Last_name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Last Name"
                  className="input-field p-1"
                />
              </div>

              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                className="input-field w-full p-1"
              />

              <input
                name="Password"
                value={formData.Password}
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
                className="input-field w-full p-1"
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="Country"
                  value={formData.Country}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Country"
                  className="input-field p-1"
                />
                <input
                  name="City"
                  value={formData.City}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="City"
                  className="input-field p-1"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="ZipCode"
                  value={formData.ZipCode}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Zip Code"
                  className="input-field p-1"
                />
                <input
                  name="Street"
                  value={formData.Street}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Street"
                  className="input-field p-1"
                />
              </div>

              <input
                name="Phone"
                value={formData.Phone}
                onChange={handleInputChange}
                type="number"
                placeholder="Phone"
                className="input-field w-full p-1"
              />

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mt-2">(Optional)</label>
                <input
                  type="text"
                  placeholder="Archaeological landmark"
                  className="input-field w-full p-1"
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-black text-white text-lg px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          {/* Summary & Payment */}
          <div className="w-full lg:w-1/3 space-y-6">
            <TotalCart />

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold mb-4">Choose Payment Method</h2>
              <div className="flex justify-around items-center gap-4">
                {[
                  { name: "Mada", src: MadaLogo },
                  { name: "Visa", src: VisaLogo },
                  { name: "Barq", src: BarqLogo },
                ].map(({name,src}) => (
                  <div key={name} className="flex flex-col items-center space-y-1 cursor-pointer" onClick={() => setmetod(name)}>
                    <div className={`w-4 h-4 rounded-full ${method === name ? "bg-green-600" : "bg-gray-300"}`} />
                    <img
                      src={src}
                      alt={`${name} logo`}
                      className="w-20 h-14 object-contain transition-transform hover:scale-105"
                    />
                    <p className="text-xs text-gray-700">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
