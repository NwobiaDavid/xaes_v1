import { Link } from "react-router-dom";
// import bannerMain from '../assets/Creative-Juice-CUS.png';


export default function SignUp() {
  return (
    <div className="flex w-[100vw] justify-end h-[100vh] bg-gradient-to-r to-pink-500 from-yellow-400 ">
        {/* <img className="h-[100vh] w-[60%] " src={bannerMain} alt="" /> */}
        <div className="text-center flex p-5 justify-between w-full">
            <div>
                <h1 className="text-9xl text-black font-bold xaes ">XAES</h1>
                <h1 className="text-9xl text-white font-bold xaes">XAES</h1>
                <h1 className="text-9xl text-black font-bold xaes">XAES</h1>
                <h1 className="text-9xl text-white font-bold xaes">XAES</h1>
                <h1 className="text-9xl text-black font-bold xaes">XAES</h1>
            </div>
            <div>
                <h1 className="text-9xl text-white font-bold xaes ">XAES</h1>
                <h1 className="text-9xl text-black font-bold xaes">XAES</h1>
                <h1 className="text-9xl text-white font-bold xaes">XAES</h1>
                <h1 className="text-9xl text-black font-bold xaes">XAES</h1>
                <h1 className="text-9xl text-white font-bold xaes">XAES</h1>
            </div>
            
        </div>
        <div className="w-[50%] z-20 opacity-100 p-4 flex flex-col items-center bg-white rounded-l-2xl">
      <div className="p-3 text-center">
          <h2 className="text-5xl font-semibold p-3 ">Sign Up</h2>
          <p>Invest in Dreams, Not Stocks: Empowering People Worldwide!</p>
      </div>
          <form action="" className=" flex w-[80%] flex-col items-center" method="get">
            <div className="flex my-3 justify-between w-full ">
            <input className="p-3 w-[48%] border focus:border-black duration-200 outline-none rounded-xl" type="text" placeholder="first name" name="" id="" />
            <input className="p-3 w-[48%] border focus:border-black duration-200 outline-none rounded-xl" type="text" placeholder="last name" name="" />
            </div>

            <input className="p-3 my-3 w-full border focus:border-black duration-200 outline-none rounded-xl" type="email" placeholder="email" name="" id="" />

            <div className="flex justify-between w-full my-3 ">
                <input className="p-3 w-[48%] border focus:border-black duration-200 outline-none rounded-xl" type="password" placeholder="password" name="" id="" />
                <input className="p-3 w-[48%] border focus:border-black duration-200 outline-none rounded-xl" type="password" placeholder="confirm password" name="" id="" />
            </div>
            <textarea placeholder="why do you want to join Xaes?" name="" className="p-3 my-3 w-full border focus:border-black duration-200 outline-none rounded-xl" id="" cols="30" rows="10"></textarea>

            <Link to={"/"} className="bg-black p-3 text-center hover:bg-pink-500 duration-200 w-full text-white rounded-lg font-semibold ">
                Sign Up
            </Link>
          </form>
      </div>
     
    </div>
  )
}
