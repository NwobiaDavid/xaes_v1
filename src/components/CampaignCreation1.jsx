import { Link } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";


export default function CampaignCreation1() {
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
              <p className="text-center font-semibold ">details section</p>
          </div>

          <form className="w-full mt-3" action="">
            <label className="w-full my-2 " htmlFor="input"> 
                <div className="text-2xl capitalize pl-2 font-medium">feature image</div>
                <div className="bg-gray-200 p-4 rounded-lg "><input type="file" name="" id="" /></div>
            </label>

            <label htmlFor="input" id="video" className="flex flex-col my-2"> 
                <div className="text-2xl capitalize pl-2 font-medium my-2" >Video</div>
                <div className="h-[350px] flex justify-center items-center rounded-lg w-full bg-gray-200 ">
                    <FaRegCirclePlay size={50} className="opacity-60" />
                </div>
                <input className="hidden" type="file" name="" id="video" />
            </label>


            <label className="flex my-2  py-3" htmlFor="option">
                <div className="text-2xl capitalize p-2 font-medium" >campaign end method: </div>
                <select name="categories" className="border-2 rounded-lg border-pink-400 p-2 text-lg outline-none" value="categories"  id="">
                    <option value="">target goal</option>
                    <option value="">target date</option>
                    <option value="">target goal and date</option>
                    <option value="">campaign never ends</option>
                </select>
            </label>

            <div className="flex p-2 my-2 justify-between ">
                <div className="bg-gray-300 rounded-lg flex justify-center p-2 items-center flex-col w-[48%]">
                    <label htmlFor="input" className="flex w-[90%] flex-col "> <div className="text-2xl capitalize pl-2 font-medium">start date</div>
                    <input className="p-2 rounded-lg " type="date" name="" id="" />
                    </label>
                </div>

                <div className="bg-gray-300 rounded-lg flex justify-center p-2 items-center flex-col w-[48%]">
                    <label htmlFor="input" className="flex w-[90%] flex-col "> <div className="text-2xl capitalize pl-2 font-medium">end date</div>
                    <input className="p-2 rounded-lg " type="date" name="" id="" />
                    </label>
                </div>

            </div>

            <div className="flex justify-between my-2">
                <div className="bg-pink-100 w-[48%] p-2 rounded-lg ">
                    <label htmlFor="input" className="flex flex-col "> <div className="text-2xl capitalize py-1 pl-2 font-medium" >minimum amount</div>
                    <input className="p-2 rounded-lg " placeholder="minimum amount..." type="text" key={Number} name="" id="" />
                    </label>
                </div>

                <div className="bg-pink-100 w-[48%] p-2 rounded-lg ">
                    <label htmlFor="input" className="flex flex-col "> <div className="text-2xl capitalize py-1 pl-2 font-medium" >maximum amount</div>
                    <input className="p-2 rounded-lg " placeholder="maximum amount..." type="text" key={Number} name="" id="" />
                    </label>
                </div>

            </div>

            <div className="bg-gray-200 rounded-lg my-3 p-3 ">
                <label htmlFor="input" className="flex flex-col "> <div className="text-2xl capitalize py-1 pl-2 font-medium">funding goals</div>
                    <input className="p-2 rounded-lg " placeholder="funding goals..." type="text" key={Number} name="" id="" />
                    </label>
            </div>

            <div className=" my-1 font-semibold flex  w-full">
                <Link className="p-3  text-white rounded-xl text-center cursor-pointer  bg-black w-full " to={"/getxaes2"}>Next</Link>
            </div>

          </form>
      </div>
    </div>
  )
}
