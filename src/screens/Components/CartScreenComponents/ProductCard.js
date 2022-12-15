import React from "react";
// import shoes from "../../../assets/shoe.png";
import useCartStore from "../../../stores/cartStore";

const ProductCard = ({ data, index }) => {
  const removeProductfromCart = useCartStore(
    (state) => state.removeDataFromCart
  );

  return (
    <div className=" p-4 mb-4">
      <div className="flex flex-col md:flex-row ">
        <img src={data.productImageUrl[0]} className="w-32" alt="" />

        <h3 className=" font-bold text-xl ml-8 mt-4 ">{data.productName}</h3>
        <p className="flex flex-col text-red-600 font-semibold text-xl ml-8 mt-8">
          {data.productPrice}{" "}
          <strike className="text-black text-base">{data.productPrice}</strike>
        </p>
      </div>
      <div className="ml-8 mt-2 ">
        <p className="mt-1 text-stone-500 ">{data.productBrandName}</p>
        <p className="mt-1 text-stone-500 ">
          Color: {data.productProperties.color}
        </p>
        <p className="mt-1 text-stone-500 ">
          Size: {data.productProperties.size}
        </p>
        {/* <select
          name="Quantity"
          class=" h-8 font-sans font-semibold text-stone-600 border mt-4 px-4 rounded"
        >
          <option selected value="">
            01
          </option>
          <option value="2">02</option>
          <option value="2">03</option>
          <option value="2">04</option>
          <option value="2">05</option>
          <option value="2">06</option>
          <option value="2">07</option>
          <option value="2">08</option>
          <option value="2">09</option>
          <option value="2">10</option>
        </select>{" "} */}
        <div className="flex mt-4 mb-4">
          <button className="ml-2 underline underline-offset-1 text-sm text-stone-800 ">
            EDIT
          </button>
          <button
            className="ml-8 underline underline-offset-1 text-sm text-stone-800 "
            onClick={() => {
              removeProductfromCart(data.productUid, index);
            }}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
