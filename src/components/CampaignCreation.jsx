import { Link } from "react-router-dom";


export default function CampaignCreation() {
  return (
    <div className="w-[100vw] flex justify-center items-center ">
      <div className="w-[40%] py-5 flex-col flex justify-center items-center ">

          <h2 className="text-5xl font-semibold ">  create a campaign </h2>

          <form className="w-full " action="">
            <label htmlFor="input"> <div>title</div>
                <input className="p-3 outline-none rounded-xl border-2 " type="text" name="" id="" />
            </label>

            <label htmlFor="input" className="flex flex-col "> <div>description</div>
            <input type="file" name="" id="" />
                <textarea className="p-3 outline-none rounded-xl border-2 " name="" id="" cols="30" rows="10" />
            </label>

            <label htmlFor="input" className="flex flex-col "> <div>short description</div>
            <input type="file" name="" id="" />
                <textarea className="p-3 outline-none rounded-xl border-2 " name="" id="" cols="30" rows="10" />
            </label>

            <label htmlFor="option">
                <div>category</div>
                <select name="categories" value="categories"  id="">
                    <option value="">two</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                </select>
            </label>

            <div className=" ">
                <Link to={"/getxaes1"}>Next</Link>
            </div>

          </form>
      </div>
    </div>
  )
}
