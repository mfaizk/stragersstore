import React from 'react';
// import {FaPlus, FaMinus} from 'react-icons/fa'
import {MdKeyboardArrowUp} from 'react-icons/md';
import shoes from "../assets/shoe.png";

const CartScreen = () => {
  return (
    <>
    <h1 className="text-4xl text-center  font-semibold mt-32 ">Check-Out</h1>
      {/* Parent div starts */}
      <div className='flex flex-col lg:flex-row  p-2 sm:p-0 justify-center w-auto h-auto gap-6 md:gap-64 mb-10'>
        {/* Left section div starts */}
        <div className=' mt-8 p-4 border rounded w-auto lg:w-2/5'>
            <h2 className='text-3xl fontt-semibold'>Shipping Address</h2>
            <form className='flex flex-col p-4 ' action="">
                <div className='flex flex-col mt-4 '>
                    <label htmlFor="">Full Name : </label>
                    <input type="text" name="fName" id="" placeholder='First Name' className='border mt-1 h-10 rounded px-4' />
                    <input type="text" name="lName" id="" placeholder='Last Name' className='border mt-1 h-10  rounded px-4' /> 
                </div>
                <div className='flex flex-col mt-4'>
                    <label>Flat, House-No. , Building, Company : </label>
                    <input type="text" name="house" id="" placeholder='House- No. , Building, Company' className='border mt-1 h-10 rounded px-4' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="">Society / Area / Village : </label>
                    <input type="text" name="area" id="" placeholder='Society / Area / village' className='border mt-1 h-10 rounded px-4' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="">Landmark : </label>
                    <input type="text" name="landmark" id="" placeholder='eg. : Near school' className='border mt-1 h-10 rounded px-4' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="">Town / City : </label>
                    <input type="text" name="city" id="" placeholder='Town / City' className='border mt-1 h-10 rounded px-4' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="">Area PinCode</label>
                    <input type="number" name="pinCode" id="" className='border mt-1 h-10 rounded px-4'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="">State</label>
                    <select name="state" id="" class="mt-1 h-8">
                    <option selected value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    </select>
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="">Country : </label>
                    <select name="country" class="mt-1 h-8" id="">
                    <option selected value="">Select Country</option>
                    <option value="India">India</option>
                    </select>
                </div>
            </form>
        </div>
        {/* Right section div */}
        <div>
            <h3 className='font-semibold text-3xl text-stone-800 mt-8 text-center'>Your Cart</h3>
        <div className="border  p-8   bg-white rounded">

            <div className="flex flex-col md:flex-row">
              <img src={shoes} className="w-32" alt="" />

              <h3 className=" font-bold text-xl ml-8 mt-4 ">
                Robust Running shoes
              </h3>
              <p className="flex flex-col text-red-600 font-semibold text-xl ml-8 mt-8">
                ₹5,498 <strike className="text-black text-base">₹7,899</strike>
              </p>
            </div>
            <div className="ml-8 mt-2 ">
              <p className="mt-1 text-stone-500 ">EAN: A100321</p>
              <p className="mt-1 text-stone-500 ">
                Color: The Strangers Black Multicolor
              </p>
              <p className="mt-1 text-stone-500 ">Size: 8</p>
              <select name="Quantity" class=" h-8 font-sans font-semibold text-stone-600 border mt-4 px-4 rounded" >
                    <option selected value="">01</option>
                    <option value="2">02</option>
                    <option value="2">03</option>
                    <option value="2">04</option>
                    <option value="2">05</option>
                    <option value="2">06</option>
                    <option value="2">07</option>
                    <option value="2">08</option>
                    <option value="2">09</option>
                    <option value="2">10</option>
                    </select>{" "}
              <div className="flex mt-4">
                <button className="ml-2 underline underline-offset-1 text-sm text-stone-800 ">
                  EDIT
                </button>
                <button className="ml-8 underline underline-offset-1 text-sm text-stone-800 ">
                  REMOVE
                </button>
              </div>
            </div>
            <div className=" bg-stone-100 pb-6 rounded mt-8">
              <h2 className="flex font-semibold text-xl p-4 justify-between ">
                {" "}
                Apply a promo Code{" "}
                <button className=' w-4'>
                <MdKeyboardArrowUp className="mt-1 " size={20} />{" "}
                </button>

              </h2>
              <p className="ml-4 text-stone-600 mt-2">Enter a Promo Code</p>
              <div className="mt-4 ml-4 ">
                <input type="text" className="border h-auto p-2 " />
                <button className="bg-stone-400 p-2 h-auto px-8 text-white font-semibold ">
                  APPLY
                </button>
              </div>
            </div>
            <div className="mt-8">
              <p className="flex w-auto justify-between">
                SubTotal <p className="">₹ 5,498</p>
              </p>
              <p className="mt-2 flex w-auto justify-between">
                Shipping costs <p className="">₹ 0</p>
              </p>
              <p className="mt-2 flex ">
                Grand Total{" "}
                <p className="text-sm mt-2 ml-4 text-stone-400">
                  Prices includes GST
                </p>
                <p className="ml-auto">₹ 5,498</p>
              </p>
            </div>
            <div className='flex justify-center items-center text-xl font-sans'>
            <button className='bg-stone-500 text-white mt-10 rounded p-3 '>
              Complete Order
            </button>

            </div>
          </div>
        </div>        
       
    
    </div>
    </>
  )
}

export default CartScreen;