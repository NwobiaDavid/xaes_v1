import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="flex justify-center w-[100vw] overflow-x-hidden p-0 items-center py-4 ">
      <div className='flex justify-center my-2 border py-1 border-gray-300 text-lg bg-white rounded-full w-[50%] items-center  '>
          {/* creators */}
          <div className="flex justify-center items-center">
            <Link className='mx-2 duration-150 p-3 hover:bg-pink-100 rounded-xl flex justify-center items-center ' to={''}><CiSearch className='mr-1' />search</Link>
            <Link className='mx-2 duration-150  p-3 hover:bg-pink-100 rounded-xl  '  to={''}>Discover</Link>
            <Link className='mx-2 duration-150 p-3 hover:bg-pink-100 rounded-xl  '  to={''}>success stories</Link>
          </div>
          {/* logo */}
          <div className=" w-[20%] flex justify-center items-center text-4xl font-semibold">
            <Link className="cursor-pointer tracking-widest " to={""}>
              XAES
            </Link>
          </div>
          {/* backers */}
          <div className="flex ">
            <Link className='mx-2 duration-150  p-3 hover:bg-pink-100 rounded-xl' to={'/getxaes'} > get xaes</Link>
            <Link className='mx-2 duration-150  p-3 hover:bg-pink-100 rounded-xl' to={''} > How it works</Link>
            <Link className='mx-2 duration-150  p-3 hover:bg-pink-100 rounded-xl' to={'/signup'} > Sign up</Link>
          </div>
      </div>
    </div>
  );
}
