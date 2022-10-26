
import React from "react";
import { Link } from "react-router-dom";



const FormScreen = () => {
  return (
    <div className="min-h-screen bg-[#410068] flex justify-center items-center font-montserrat">
      <div className="bg-[#5e0098] lg:min-h-[556px] min-h-screen lg:min-w-[1016px] min-w-full flex items-center justify-center lg:flex-row sm:flex-row flex-col">
      {/* <div className="flex sm:hidden text-white self self-start p-4 ">FORM</div> */}
      <div className="lg:min-w-[580px] lg:min-h-[556px] sm:min-w-[254px] min-w-full flex justify-center items-center grow">
     
         <div className="flex flex-col justify-start self-start flex-1 p-4 text-white">
         <img
         src={require("../assets/asset-xl/logo-xl.png")}
        alt="brand-logo"
        className="flex justify-center items-center p-16 lg:mt-24  "
            />
          <h1 className="font-poppins-bold sm:hidden  text-2xl flex justify-center items-center">USER DETAIL FORM</h1>
        
      </div>
      </div>
      {/* details field */}
     <div className="bg-white lg:min-h-[556px]   lg:min-w-[508px] sm:min-w-[254px] min-w-full grow">
      <form className="flex justify-center items-center flex-col lg:min-h-[556px] p-8  gap-2">
        
        {/* first name */}
         <input 
        type="text"
        id="name"
        placeholder="First Name"
        className="border-[#D1D5DB] border-2  h-[38px]  rounded-md  p-2 "
        />
        {/* lsat name */}
        <input 
        type="text"
        id="name"
        placeholder="Last Name"
        className="border-[#D1D5DB] border-2 h-[38px] rounded-md p-2  "
        />
        {/* phone number */}
        <input 
        type="number"
        id="name"
        placeholder="+91 7007679112"
        className="border-[#D1D5DB] border-2  h-[38px] rounded-md p-2 "
        />
         {/* gender */}
       <input 
        type="text"
        id="name"
        placeholder="Gender"
        className="border-[#D1D5DB] border-2 h-[38px] rounded-md p-2 "
        />
        {/* location */}
        <input 
        type="text"
        id="name"
        placeholder="Location"
        className="border-[#D1D5DB] border-2  h-[38px] rounded-md p-2 "
        />
        {/* checkbox */}
       <label id="admin" className="mr-36">
        <input 
        type="checkbox"
        name="Is Admin"
        id="admin"
        className=" "
        />
        {" "}
        Is Admin {" "}
        
      </label>  
         <input 
        type="text"
        id="admin"
        placeholder="code"
        className="border-[#D1D5DB] border-2  h-[38px] rounded-md p-2 mt-1"
        />
        
      <Link
        className=" bg-[#5e0098] text-[#ffffff] border-white border-2  p-1 flex items-center justify-center self-center mt-9 px-9 rounded-md "
        
        >
          Submit
      </Link>
     
      </form>
     </div>
      </div>
    </div>
  );
};

export default FormScreen;
