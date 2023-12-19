import { Link } from "react-router-dom";
import { PiImagesFill } from "react-icons/pi";


export default function CampaignCreation2() {
  return (
    <div className="w-[100vw] flex justify-center items-center ">
      <div className="w-[40%] py-5 flex-col flex justify-center items-center ">

      <div className="relative ">
              <div className="h-[50px] -z-10 top-0 absolute w-[50px] bg-pink-500 "></div>
              <div className="h-[50px] -z-10 top-0 right-3 absolute w-[50px] bg-pink-500 "></div>
              <div className="h-[50px] -z-10 bottom-0 left-10 absolute w-[50px] bg-pink-400 "></div>
              <div className="h-[50px] -z-10 bottom-3 right-20 absolute w-[50px] bg-pink-400 "></div>
              <div className="h-[50px] -z-10 bottom-0 right-0 absolute w-[50px] bg-pink-600 "></div>
              <h2 className="text-5xl p-4 font-bold ">  Create a Campaign </h2>
              <p className="text-center font-semibold ">review section</p>
          </div>

          <form className="w-full my-2" action="">
            <label htmlFor="input"> <div className="text-2xl my-2 capitalize pl-2 font-medium">Investment percentage</div>
                <input className="p-3 text-lg w-full outline-none rounded-xl border-2 " placeholder="how much are you willing to give?..." type="text" name="" id="" />
            </label>

            <label htmlFor="input" className="flex my-2 flex-col "> <div className="text-2xl my-2 capitalize pl-2 font-medium" >reward image</div>
            <label htmlFor="input" className="h-[300px] flex justify-center items-center rounded-lg w-full bg-gray-200 ">
                <div className="flex flex-col justify-center opacity-50 items-center">
                    <PiImagesFill size={50} className=" " />
                    <button className="py-1 px-2 border rounded-md border-black ">choose file</button>
                </div>
            <input className=" hidden" type="file" name="" id="img" />
            </label>
                {/* <textarea className="p-3 outline-none rounded-xl border-2 " name="" id="img" cols="30" rows="10" /> */}
            </label>

            <label htmlFor="input" className="flex flex-col my-2 "> <div className="text-2xl capitalize pl-2 font-medium">reward description</div>
            <label className="ml-2 my-1 w-[15%] text-center flex" htmlFor="text"><span className="bg-pink-500 capitalize p-1 cursor-pointer w-full text-white rounded-md " >choose file</span></label>
                <input className="bg-pink-500 hidden  p-1 text-white rounded-xl " type="file" name="text" id="text" />
                <textarea placeholder="a reward description here..." className="p-3 outline-none rounded-xl border-2 " name="" id="" cols="30" rows="10" />
            </label>

            <label className="p-3 my-4 flex items-center justify-center rounded-lg bg-pink-100" htmlFor="option">
                <div className="text-2xl capitalize pl-2 font-medium mr-5" >estimated delivery date</div>
               <input className="p-1 rounded-lg w-[30%] " type="date" name="" id="" />
            </label>

            <label htmlFor="input" className="flex flex-col mb-4 mt-2 "> <div className="text-2xl capitalize my-2 pl-2 font-medium">why xaes?</div>
                <input className="bg-pink-500 hidden  p-1 text-white rounded-xl " type="file" name="text" id="text" />
                <textarea placeholder="Tell us More" className="p-3 text-lg outline-none rounded-xl border-2 " name="" id="" cols="30" rows="10" />
            </label>

            <div className="flex rounded-lg my-2 flex-col p-3 bg-gray-200 ">
                <h1 className="text-2xl capitalize pl-2 font-medium" >benefits in investing in you</h1>
                <p className="opacity-80 pl-2 mb-2 ">why should people invest in you?</p>
                <input className="p-2 my-1 text-lg w-full outline-none rounded-xl border-2 " placeholder="benefit 1" type="text" name="" id="" />
                <input className="p-2 my-1 text-lg w-full outline-none rounded-xl border-2 " placeholder="benefit 2" type="text" name="" id="" />
                <input className="p-2 my-1 text-lg w-full outline-none rounded-xl border-2 " placeholder="benefit 3" type="text" name="" id="" />
                <span className="px-2 py-1 shadow-inner rounded-md w-fit bg-gray-300">add more</span>
            </div>

            <div className="font-semibold my-4 flex items-center  "><label htmlFor=""><input type="checkbox" value={""} name="" placeholder="" id="" />  i agree with the terms and services</label></div>
            
            <div className=" my-1 font-semibold flex  w-full">
                <Link className="p-3  text-white rounded-xl text-center cursor-pointer  bg-black w-full " to={"/campaign"}>Finish!</Link>
            </div>

          </form>
      </div>
    </div>
  )
}
