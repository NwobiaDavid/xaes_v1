import { Link } from "react-router-dom";


export default function CampaignCreation1() {
  return (
    <div className="w-[100vw] flex justify-center items-center ">
      <div className="w-[40%] py-5 flex-col flex justify-center items-center ">

          <h2 className="text-5xl py-2 font-semibold ">  create a campaign </h2>

          <form className="w-full " action="">

            <label className="w-full  " htmlFor="input"> 
                <div>feature image</div>
                <div className="bg-red-50 p-4 rounded-lg "><input type="file" name="" id="" /></div>
            </label>

            <label htmlFor="input" className="flex flex-col "> 
                <div>Video</div>
                <input type="file" name="" id="" />
            </label>


            <label htmlFor="option">
                <div>campaign end method</div>
                <select name="categories" value="categories"  id="">
                    <option value="">target goal</option>
                    <option value="">target date</option>
                    <option value="">target goal and date</option>
                    <option value="">campaign never ends</option>
                </select>
            </label>

            <div className="flex ">
                <label htmlFor="input" className="flex flex-col "> <div>start date</div>
                <input type="date" name="" id="" />
                </label>

                <label htmlFor="input" className="flex flex-col "> <div>end date</div>
                <input type="date" name="" id="" />
                </label>

            </div>

            <div className="flex ">
                <label htmlFor="input" className="flex flex-col "> <div>minimum mount</div>
                <input type="text" key={Number} name="" id="" />
                </label>

                <label htmlFor="input" className="flex flex-col "> <div>maximum amount</div>
                <input type="text" key={Number} name="" id="" />
                </label>

            </div>

            <label htmlFor="input" className="flex flex-col "> <div>funding goals</div>
                <input type="text" key={Number} name="" id="" />
                </label>

            <div className=" ">
                <Link to={"/getxaes2"}>Next</Link>
            </div>

          </form>
      </div>
    </div>
  )
}
