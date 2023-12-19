/* eslint-disable no-undef */
// import 'dotenv/config'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { PaystackButton } from 'react-paystack'
import { useState } from 'react';

export default function Campaign() {
    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLICK_KEY;
    // const amount = 1000000
    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState(0)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
  
    const componentProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Pay with Paystack",
      onSuccess: () =>
        alert("Thanks for doing business with us! Come back soon!!"),
      onClose: () => alert("Wait! Don't leave :("),
    }
  return (
    <div className="">
      <div className="h-[10%] ">
        <Navbar />
      </div>
      <div className="h-[90%] flex w-full flex-col  items-center ">
        {/* banner image */}
        <div className="h-[150px] w-full bg-gray-300 ">
          d dd{/* <img src="" alt="" /> */}
        </div>
        {/* description */}
        <div className="flex w-full p-2">
          <section className=" px-5">
            <div className="flex ">
              <div>
                <h1 className="text-5xl font-semibold  ">
                  Lights, Camera, Aspire: Support Alex&apos;s Filmmaking Dream!
                </h1>
                <p className="text-xl opacity-90">
                  Hello, amazing community! 🎬 I&apos;m Alex, an aspiring
                  filmmaker with a dream to tell captivating stories that
                  resonate with hearts. I&m launching this campaign to fund my
                  debut short film project, Whispers of Tomorrow.
                </p>
              </div>
              <div className="border-4 text-lg border-pink-500 h-fit flex flex-col justify-center  rounded-lg p-3 bg-white ">
                <p>
                  Funding Goals: <span className="font-semibold">$5,000</span>{' '}
                </p>
                <p>
                  Campaign Duration:{' '}
                  <span className="font-semibold">45 days</span>
                </p>
                <div className="w-64 h-4 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="h-full bg-blue-500 w-[60%] "></div>
                </div>
              </div>
            </div>

            <div className="h-[400px] flex justify-center items-center p-2 my-5 ">
              <video className="h-[400px] bg-gray-200 " src="">
                {' '}
              </video>
            </div>

            <div>
              <h1 className="text-2xl w-[30%] text-center rounded-md bg-black text-white capitalize py-1 px-2 font-medium">
                Why I Need Your Support:{' '}
              </h1>
              <p className="text-lg ">
                To bring &lsquo;Whispers of Tomorrow&rsquo; to life, I need your
                help. Your support will fund equipment rental, production costs,
                and post-production editing. Let&apos;s create something
                unforgettable together!
              </p>
            </div>

            <div className="flex justify-around rounded-md p-2 bg-gray-300 my-3">
              <div className="bg-yellow-300 rounded-lg flex justify-center py-3 px-2 items-center flex-col w-[40%]">
                <label htmlFor="input" className="flex w-[90%] flex-col ">
                  {' '}
                  <div className="text-2xl capitalize pl-2 font-medium">
                    start date
                  </div>
                  <input
                    className="p-2 rounded-lg "
                    type="date"
                    name=""
                    id=""
                  />
                </label>
              </div>

              <div className="bg-yellow-300 rounded-lg flex justify-center py-3 px-2 items-center flex-col w-[40%]">
                <label htmlFor="input" className="flex w-[90%] flex-col ">
                  {' '}
                  <div className="text-2xl capitalize pl-2 font-medium">
                    end date
                  </div>
                  <input
                    className="p-2 rounded-lg "
                    type="date"
                    name=""
                    id=""
                  />
                </label>
              </div>
            </div>

            <div className="mt-5 ">
              <h1 className="text-2xl w-[20%] text-center rounded-md bg-black text-white capitalize py-1 px-2 font-medium">
                What You Get:
              </h1>

              <ul className="pl-5 ">
                <h1 className="text-2xl capitalize py-1 pl-2 font-medium">
                  Supporter Tiers:
                </h1>

                <div className="border-l-8 border-pink-500 p-2">
                  <h2 className="text-xl capitalize py-1 pl-2 font-medium">
                    $15 - Sneak Peek Supporter:
                  </h2>

                  <p>
                    Exclusive Behind-the-Scenes Access. Digital Download of the
                    Film&apos;s Soundtrack.
                  </p>
                </div>

                <div className="border-l-8 my-4 border-pink-500 p-2">
                  <h2 className="text-xl capitalize py-1 pl-2 font-medium">
                    $30 - Film Buff Contributor:
                  </h2>

                  <p>
                    Early Access to the Short Film. Personalized Digital Film
                    Poster. 5% Revenue Share for First Year. Previous Tier
                    Rewards.
                  </p>
                </div>

                <div className="border-l-8 border-pink-500 p-2">
                  <h2 className="text-2xl capitalize py-1 pl-2 font-medium">
                    $75 - Executive Producer Patron:
                  </h2>

                  <p>
                    Name in the Film Credits. Virtual Q&A Session with Alex. 10%
                    Revenue Share for First Year. Previous Tier Rewards.
                  </p>
                </div>
              </ul>
            </div>

            <div className="my-2 ">
              <h1 className="text-2xl w-[20%] text-center rounded-md bg-black text-white capitalize py-1 px-2 font-medium">
                Why Xaes?{' '}
              </h1>
              <p className="text-lg ">
                Xaes is not just a funding platform; it&apos;s a community of
                dreamers. Join me on this cinematic journey, and let&apos;s
                create a film that not only moves hearts but also shares the joy
                of success with those who believe in it.
              </p>
            </div>
          </section>
          {/* payment */}
          <section className="w-[30%] h-[100vh] ">
            <div className="w-full border-2 border-black bg-white rounded-xl h-[80%]">
              <form className="p-2 w-full rounded-xl " action="">
                <h1 className="text-xl capitalize py-1 my-2 pl-2 font-medium">
                  how much do you want to invest?
                </h1>
                <input
                  placeholder=" name"
                  type="text"
                  name="amount"
                  id="amount"
                  value={name}
                  onChange={e=> setName(e.target.value)}
                  className="p-2  mt-2  w-full rounded-lg border"
                />
                 <input
                  placeholder="phone number"
                  type="number"
                  name="amount"
                  id="amount"
                  value={phone}
                  onChange={(e)=> setPhone(e.target.value)}
                  className="p-2  mt-2  w-full rounded-lg border"
                />
                <input
                  placeholder="email"
                  type="email"
                  name="amount"
                  id="amount"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="p-2  mt-2  w-full rounded-lg border"
                />
                <input
                  placeholder="amount"
                  type="number"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={e=> setAmount(e.target.value)}
                  className="p-2 w-full  mt-2  rounded-lg border"
                />

                <div className=" my-3 font-semibold flex  w-full">
                  <Link
                    className="p-2  text-white rounded-xl text-center cursor-pointer  bg-black w-full "
                    to={'/getxaes2'}
                  >
                    invest!
                  </Link>
                </div>
              </form>
              <div>
              <div className='px-2'>
                  <PaystackButton className="border-2 w-full hover:text-white rounded-xl duration-150 font-semibold hover:bg-blue-500 border-black p-2" {...componentProps} />
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
