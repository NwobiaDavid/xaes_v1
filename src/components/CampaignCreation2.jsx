import { Link } from "react-router-dom";


export default function CampaignCreation2() {
  return (
    <div className="w-[100vw] flex justify-center items-center ">
      <div className="w-[40%] py-5 flex-col flex justify-center items-center ">

          <h2 className="text-5xl font-semibold ">  create a campaign </h2>
          <p>reward section</p>

          <form className="w-full " action="">
            <label htmlFor="input"> <div>Investment percentage</div>
                <input className="p-3 outline-none rounded-xl border-2 " type="text" name="" id="" />
            </label>

            <label htmlFor="input" className="flex flex-col "> <div>reward image</div>
            <input type="file" name="" id="" />
                <textarea className="p-3 outline-none rounded-xl border-2 " name="" id="" cols="30" rows="10" />
            </label>

            <label htmlFor="input" className="flex flex-col "> <div>reward description</div>
            <input type="file" name="" id="" />
                <textarea className="p-3 outline-none rounded-xl border-2 " name="" id="" cols="30" rows="10" />
            </label>

            <label htmlFor="option">
                <div>estimated delivery date</div>
               <input type="date" name="" id="" />
            </label>
            <div>
                <h1>benefits in investing in you</h1>
                <input placeholder="benefit 1" type="text" name="" id="" />
                <input placeholder="benefit 2" type="text" name="" id="" />
                <input placeholder="benefit 3" type="text" name="" id="" />
                <span>more</span>
            </div>

            <div><label htmlFor=""><input type="checkbox" value={""} name="" placeholder="" id="" />i agree with the terms and services</label></div>
            <div className=" ">
                <Link to={"/campaign"}>Finish</Link>
            </div>

          </form>
      </div>
    </div>
  )
}
