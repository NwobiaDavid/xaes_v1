import bannerMain from '../assets/Creative-Juice-CUS.png';
import banner1st from '../assets/77082199_1702412259124238_r.webp';
import banner2nd from '../assets/77101625_1702492609558712_r.webp';

export default function PopularCampaign() {
  return (
    <div className='py-10 flex w-[100vw] overflow-x-hidden justify-center items-center'>

    <div className='w-[20%] hover:scale-105 duration-200 p-1 hover:z-20 rounded-xl shadow-lg '>
    <img className='rounded-xl' src={banner1st} alt="" />
    <div className='bg-white flex flex-col p-3  '>
          <h2 className='text-2xl pb-1 font-semibold'>Capturing Dreams: Empower Alex&apos;s Photography Journey!</h2>
          <p className=' opacity-80'>
            Hey, amazing community! 👋 I&apos;m Alex, a passionate photographer with
            a dream to elevate my craft and share inspiring visual stories with
            the world...
          </p>
          <p className='text-right p-3'>
            <span className='font-bold'>$50,200</span> raised
          </p>
        </div>
    </div>

      <div className='w-[40%] hover:scale-105 hover:z-20  duration-200 shadow-md p-1 rounded-xl flex flex-col justify-center items-center'>
        <img className='rounded-xl' src={bannerMain} alt="" />
        <div className='bg-white flex flex-col p-3  '>
          <h2 className='text-4xl pb-1 font-semibold'>Capturing Dreams: Empower Alex&apos;s Photography Journey!</h2>
          <p className='text-lg opacity-80'>
            Hey, amazing community! 👋 I&apos;m Alex, a passionate photographer with
            a dream to elevate my craft and share inspiring visual stories with
            the world...
          </p>
          <p className='text-right p-3'>
            <span className='font-bold'>$50,200</span> raised
          </p>
        </div>
      </div>

      <div className='w-[20%] shadow-lg hover:z-20  rounded-r-xl h-[10rem] bg-pink-500 '>
      <img className='rounded-xl' src={banner2nd} alt="" />
    <div className='bg-white flex flex-col p-3  '>
          <h2 className='text-2xl pb-1 font-semibold'>Capturing Dreams: Empower Alex&apos;s Photography Journey!</h2>
          <p className=' opacity-80'>
            Hey, amazing community! 👋 I&apos;m Alex, a passionate photographer with
            a dream to elevate my craft and share inspiring visual stories with
            the world...
          </p>
          <p className='text-right p-3'>
            <span className='font-bold'>$50,200</span> raised
          </p>
        </div>
    </div>

    </div>
  );
}
