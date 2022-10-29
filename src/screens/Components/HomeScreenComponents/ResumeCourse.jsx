import welcomeLogo from "../../../assets/welcomeLogo.png";
import { MdPlayCircleFilled } from "react-icons/md";
let ResumeCourse = ({name, chapter, users}) => {
  return (
    <div>
        <>
        <div className="max-w-sm bg-white rounded-lg  shadow-md">
        <img className="rounded-t-lg" src={welcomeLogo} alt="" />
        <div className="p-4 bg-slate-300 rounded">
        <div className="flex flex-wrap flex-grow  w-full">
        <p className="mb-3 font-normal text-gray-700 ">chapter-{chapter}</p>
        <button class="ml-auto w-auto  text-sm font-medium text-center rounded-full">
        <MdPlayCircleFilled className=" text-white bg-violet-900 rounded-full" size={30}/>
        </button>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 ">Active users{users}</p>
        
        </div>

    </div>
    </>
    </div>
  )
}

export default ResumeCourse