import { Link } from "react-router-dom";


export default function CampaignCreation() {
  return (
    <div className="w-[100vw] overflow-x-hidden flex justify-center items-center ">
      <div className="w-[40%] py-2 flex-col flex justify-center items-center ">

          <div className="relative ">
              <div className="h-[50px] -z-10 top-0 absolute w-[50px] bg-pink-500 "></div>
              <div className="h-[50px] -z-10 top-0 right-3 absolute w-[50px] bg-pink-500 "></div>
              <div className="h-[50px] -z-10 bottom-0 left-10 absolute w-[50px] bg-pink-400 "></div>
              <div className="h-[50px] -z-10 bottom-3 right-20 absolute w-[50px] bg-pink-400 "></div>
              <div className="h-[50px] -z-10 bottom-0 right-0 absolute w-[50px] bg-pink-600 "></div>
              <h2 className="text-5xl p-4 font-bold ">  Create a Campaign </h2>
              <p className="text-center font-semibold ">story section</p>
          </div>

          <form className="w-full my-2" action="">
            <label htmlFor="input"> <div className="text-2xl capitalize pl-2 font-medium">title</div>
                <input placeholder="title of the campaign" className="p-3 text-lg w-full outline-none rounded-xl border-2 " type="text" name="" id="" />
            </label>

            <label htmlFor="input" className="flex flex-col my-2 "> <div className="text-2xl capitalize pl-2 font-medium">description</div>
                <label className="ml-2 my-1 w-[15%] text-center flex" htmlFor="text"><span className="bg-pink-500 capitalize p-1 w-full text-white rounded-md " >choose file</span></label>
                <input className="bg-pink-500 hidden  p-1 text-white rounded-xl " type="file" name="text" id="text" />
                <textarea placeholder="description here..." className="p-3 text-lg outline-none rounded-xl border-2 " name="" id="" cols="30" rows="10" />
            </label>

            <label htmlFor="input" className="flex flex-col my-2 "> <div className="text-2xl capitalize pl-2 font-medium">short description</div>
            <label className="ml-2 my-1 w-[15%] text-center flex" htmlFor="text"><span className="bg-pink-500 capitalize p-1 w-full text-white rounded-md " >choose file</span></label>
                <input className="bg-pink-500 hidden  p-1 text-white rounded-xl " type="file" name="text" id="text" />
                <textarea placeholder="a short description here..." className="p-3 outline-none rounded-xl border-2 " name="" id="" cols="30" rows="10" />
            </label>

            <label htmlFor="option"  id="categories" className="flex p-3 ">
                <div className="text-2xl capitalize pl-2 font-medium">category</div>
                <select name="" className="ml-1 cursor-pointer w-[30%] font-semibold p-2 border rounded-lg" value=""  id="">
                    <option className="" value="">two</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                </select>
            </label>

            <div className=" my-1 font-semibold flex  w-full">
                <Link className="p-3  text-white rounded-xl text-center cursor-pointer  bg-black w-full " to={"/getxaes1"}>Next</Link>
            </div>

          </form>
      </div>
    </div>
  )
}
