import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../configs/firebaseConfig";
import { getDatabase, set, ref } from "firebase/database";
import { toast, ToastContainer } from "react-toastify";
import useAuthStore from "../stores/authStore";
// import { FaFacebook } from "react-icons/fa";
const database = getDatabase(app);
const FormScreen = () => {
  const [fName, setFname] = useState("");
  const [lName, setlName] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [location, setLoaction] = useState("");
  const [isChecked, setisChecked] = useState(true);
  const [code, setCode] = useState("");

  const user = useAuthStore((state) => state.user);

  const formHandler = () => {
    if (fName && lName && phNumber && gender && location) {
      if (!Number(phNumber)) {
        toast.error("Please Enter number in phone number");
      } else {
        toast.promise(
          set(ref(database, "users/" + user.uid), {
            fName,
            lName,
            phNumber,
            gender,
            location,
            code,
          }),
          {
            pending: {
              render() {
                return "Sending Data";
              },
            },
            success: {
              render() {
                return "Data saved";
              },
            },
            error: {
              render() {
                return "Unable to save data";
              },
            },
          }
        );
      }
    } else {
      toast.error("Fill form properly");
      console.log(fName);
      console.log(lName);
      console.log(phNumber);
      console.log(gender);
      console.log(location);
    }
  };

  return (
    <div className="min-h-screen bg-[#410068] flex justify-center items-center font-montserrat">
      <ToastContainer />
      <div className="bg-[#5e0098] lg:min-h-[556px] min-h-screen lg:min-w-[1016px] min-w-full flex items-center justify-center lg:flex-row sm:flex-row flex-col">
        <div className="lg:min-w-[580px] lg:min-h-[556px] sm:min-w-[254px] min-w-full flex justify-center items-center grow">
          <div className="flex flex-col justify-start sm:self-start flex-1 p-4 self-center text-white">
            <img
              src={require("../assets/asset-xl/logo-xl.png")}
              alt="brand-logo"
              className="justify-center items-center p-16 lg:mt-24 hidden sm:flex "
            />
            <h1 className="font-poppins-bold sm:hidden  text-2xl flex justify-center items-center  ">
              USER DETAIL FORM
            </h1>
          </div>
        </div>
        {/* details field */}
        <div className="bg-white lg:min-h-[556px]   lg:min-w-[508px] sm:min-w-[254px] min-w-full grow p-8 flex justify-center items-center">
          <form className="flex justify-center items-start flex-col  gap-3  min-w-min ">
            {/* first name */}
            <input
              type="text"
              id="name"
              placeholder="First Name"
              className="border-[#D1D5DB] border-2  h-[38px]  rounded-md  p-2 "
              onChange={(t) => {
                setFname(t.currentTarget.value.toString());
              }}
            />
            {/* lsat name */}
            <input
              type="text"
              id="name"
              placeholder="Last Name"
              className="border-[#D1D5DB] border-2 h-[38px] rounded-md p-2  "
              onChange={(t) => {
                setlName(t.currentTarget.value.toString());
              }}
            />
            {/* phone number */}
            <input
              type="text"
              id="name"
              placeholder="+91 7007679112"
              className="border-[#D1D5DB] border-2  h-[38px] rounded-md p-2 "
              onChange={(t) => {
                setPhNumber(t.currentTarget.value.toString());
              }}
            />
            {/* gender */}
            {/* className="border-[#D1D5DB] border-2 h-[38px] rounded-md p-2 " */}
            <div className="flex justify-between  min-w-full">
              <label className=" ">Gender</label>
              <select
                className="rounded-sm bg-white border-[#D1D5DB] border-2"
                onChange={(t) => {
                  setGender(t.target.value);
                  // console.log(t.target.value);
                }}
                defaultValue={gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>

            {/* location */}
            <input
              type="text"
              id="name"
              placeholder="Location"
              className="border-[#D1D5DB] border-2  h-[38px] rounded-md p-2 "
              onChange={(t) => {
                setLoaction(t.currentTarget.value);
              }}
            />
            {/* checkbox */}
            <label id="admin" className="mr-36">
              <input
                type="checkbox"
                name="Is Admin"
                id="admin"
                className=" "
                checked={!isChecked}
                onChange={() => {
                  setisChecked(!isChecked);
                }}
              />{" "}
              Admin{" "}
            </label>
            <input
              type="text"
              id="admin"
              placeholder="code"
              className="border-[#D1D5DB] border-2  h-[38px] rounded-md p-2 mt-1"
              disabled={isChecked}
              onChange={(t) => {
                setCode(t.currentTarget.value.toString());
              }}
            />
            <Link
              className=" bg-[#5e0098] text-[#ffffff] border-white border-2  p-1 flex items-center justify-center self-center mt-9 px-9 rounded-md "
              onClick={() => {
                formHandler();
                // console.log(gender);
              }}
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
