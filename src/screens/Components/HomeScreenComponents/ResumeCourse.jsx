// import welcomeLogo from "../../../assets/welcomeLogo.png";
import { MdPlayCircleFilled } from "react-icons/md";
import { useNavigate } from "react-router";
import useCartStore from "../../../stores/cartStore";
import { LoadingImage } from "../../LoadingImage";
let ResumeCourse = ({ data }) => {
  const { productName: name, chapter, productImageUrl: img } = data;
  const imageData = img ? img[0] : null;
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addtoCart);

  return (
    <div>
      <>
        <div className="max-w-sm bg-white rounded-lg  shadow-md">
          {imageData ? (
            <img
              className="rounded-t-lg"
              src={imageData}
              alt=""
              onClick={() => {
                // console.log(data);
                navigate("/product", { state: data });
              }}
            />
          ) : (
            <LoadingImage />
          )}
          <div className="p-4 bg-slate-300 rounded">
            <div className="flex flex-wrap flex-grow  w-full">
              <p className="mb-3 font-normal text-gray-700 ">
                chapter-{chapter}
              </p>
              <button
                className="ml-auto w-auto  text-sm font-medium text-center rounded-full"
                onClick={() => {
                  addToCart(data);
                }}
              >
                <MdPlayCircleFilled
                  className=" text-white bg-violet-900 rounded-full"
                  size={30}
                />
              </button>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {name}
            </h5>
          </div>
        </div>
      </>
    </div>
  );
};

export default ResumeCourse;
