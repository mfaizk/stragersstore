import React from "react";
import { useLocation } from "react-router";
// import { useEffect } from "react";
// import useCartStore from "../stores/cartStore";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import LoadingScreen from "./LoadingScreen";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
const ProductScreen = () => {
  const { state } = useLocation();
  const [addToFav, setaddToFav] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  //   const item = useCartStore((state) => state.cartData);
  // useEffect(() => {
  //   console.log(state.productImageUrl);
  // }, [state]);
  function changePhoto(pos) {
    if (pos === "forward") {
      if (currentPhotoIndex === 3) {
        return setCurrentPhotoIndex(0);
      } else {
        return setCurrentPhotoIndex(currentPhotoIndex + 1);
      }
    } else {
      if (currentPhotoIndex === 0) {
        return setCurrentPhotoIndex(3);
      } else {
        return setCurrentPhotoIndex(currentPhotoIndex - 1);
      }
    }
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     changePhoto("forward");
  //     console.log(Countdown);
  //   }, Countdown);
  // }, []);

  return (
    <>
      {state ? (
        <div className="min-w-full min-h-screen bg-[#f7f1ff] flex items-start mt-20 md:mt-0 md:items-center justify-center container  ">
          <div className="container flex  justify-between bg-white flex-col md:flex-row">
            {/* Primary Image Card Start */}

            <div
              className={`flex grow items-center justify-between bg-no-repeat bg-cover md:h-[600px] md:p-4 md:m-11 md:w-auto h-96 p-1 transition-all ease-in-out delay-150`}
              style={{
                backgroundImage: `url(${state.productImageUrl[currentPhotoIndex]})`,
              }}
            >
              <BsArrowLeftCircle
                color="#758283"
                className="h-14 w-14  z-20"
                onClick={() => {
                  changePhoto("backward");
                }}
              />

              <div className=" flex flex-row gap-9 self-end ">
                {state.productImageUrl.map((e, i) => {
                  if (currentPhotoIndex === i) {
                    return (
                      <div className="bg-[#242B2E] h-2 w-2 rounded-3xl"></div>
                    );
                  }
                  return (
                    <div
                      className="bg-white h-2 w-2 rounded-3xl"
                      onClick={() => {
                        setCurrentPhotoIndex(i);
                      }}
                    ></div>
                  );
                })}
              </div>

              <BsArrowRightCircle
                className="h-14 w-14 z-20 "
                color="#758283"
                onClick={() => {
                  changePhoto("forward");
                }}
              />
            </div>
            {/* Primary Image Card End */}

            {/* Secondary Card Start */}
            <div className="flex md:min-w-[40%] flex-col  bg-white p-12">
              <div className="flex items-center justify-between ">
                <h4 className="text-xl font-light">{state.productName}</h4>
              </div>
              <h5 className="text-sm text-[#a1a4af]">{"Category dummy"}</h5>
              <h4 className="text-xl">₹ {state?.productPrice}</h4>
              <div className="flex items-center justify-between py-2">
                <h4 className="text-sm font-light">Select Size</h4>
                <h4 className="text-sm font-light text-[#800baf]">
                  Size chart
                </h4>
              </div>
              <div className="p-4">size Slider</div>
              <div className=" flex items-center justify-between flex-col  gap-4">
                <div className=" flex  grow w-[100%] items-center justify-center gap-2">
                  <button className="bg-[#5e0098] grow text-white p-3 rounded-md w-[100%]">
                    Add to cart
                  </button>
                  {addToFav ? (
                    <AiFillHeart
                      size={30}
                      color="red"
                      onClick={() => {
                        setaddToFav(!addToFav);
                      }}
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      color="red"
                      onClick={() => {
                        setaddToFav(!addToFav);
                      }}
                    />
                  )}
                </div>

                <button className="bg-[#5A20CB] grow text-white p-3 rounded-md w-[100%]">
                  Buy now
                </button>
              </div>
            </div>
            {/* Secondary Card End */}
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default ProductScreen;
