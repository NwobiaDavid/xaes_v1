import Navbar from './Navbar';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CategoriesCart from './micro/CategoriesCart';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PopularCampaign from './PopularCampaign';

export default function Frontpage() {


  const categories = [
    {
      header: 'Science and Research',
      desc: 'Scientists and researchers looking for funding for scientific studies, research projects, or innovative experiments.',
    },
    {
      header: 'Arts and Crafts',
      desc: 'Visual artists, painters, sculptors, and crafters seeking funding for art projects, exhibitions, or studio space.',
    },
    {
      header: 'Education and Training',
      desc: 'Individuals and organizations offering courses, certification exams, and professional development programs.',
    },
    {
      header: 'Entrepreneurship and Business',
      desc: 'Aspiring entrepreneurs and small business owners looking for support in starting or growing their ventures.',
    },
    {
      header: 'Career Advancement and Transition',
      desc: 'Individuals and organizations offering courses, certification exams, and professional development programs.',
    },
    {
      header: 'Education and Training',
      desc: 'Individuals and organizations offering courses, certification exams, and professional development programs.',
    },
    {
      header: 'Education and Training',
      desc: 'Individuals and organizations offering courses, certification exams, and professional development programs.',
    },
  ];
  return (
    <div className='w-[100vw] overflow-x-hidden'>
      <Navbar />
      <div className="p-2 ">
        {/* search bar */}
        <div className="flex relative justify-center items-center">
          <div className=" w-[25%] flex relative justify-center items-center ">
            <input
              placeholder="search..."
              className="border px-3 py-2 w-full rounded-md border-black outline-none"
              type="text"
              name=""
              id=""
            />
            <Link className=" absolute hover:bg-pink-600 duration-150  right-2 rounded-md bg-pink-500 text-white p-2">
              <FaSearch />
            </Link>
          </div>
        </div>

        {/* categories */}
        <div className="mt-4  ">
        <h2 className='px-5 bg-pink-500 my-1 rounded-lg shadow-md text-white text-center w-[10%] ml-10 font-bold opacity-80 text-lg '>categories</h2>
          <section aria-label="Categories">
            <Splide
              options={{
                rewind: true,
                gap: '1rem',
                perPage: 5,
                type:'loop',
                rewindSpeed: 300,
                pauseOnHover: true,
                autoplay: true,
                arrows: true,
                pagination: false,
              }}
              hasTrack={false}
              className="splide"
            >
              <SplideTrack className=' '>
                {categories.map((item, index) => (
                  <SplideSlide key={index}>
                    <CategoriesCart
                      header={item.header}
                      description={item.desc}
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
              <div className="splide__arrows ">
                <button className="splide__arrow splide__arrow--prev bg-pink-300">
                  {'<'}
                </button>
                <button className="splide__arrow splide__arrow--next">
                  {'>'}
                </button>
              </div>
            </Splide>
          </section>
        </div>

        {/* popular campaign */}
        <PopularCampaign />
        <div>frontpage</div>
      </div>
    </div>
  );
}
