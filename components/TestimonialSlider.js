// testimonial data
const testimonialData = [
  {
    image: '/t-avt-3.png',
    name: 'Athi Maqanda',
    position: 'Supervisor @ UCT GSB',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Joshua Schell',
    position: 'Manager @ Younglings Africa',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-1.png',
    name: 'Claude Fortune',
    position: 'Manager @ 2U',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];


// import swiper component
import {Swiper, SwiperSlide} from 'swiper/react';

// importing swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// icons
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
 
// importing required modules 
import { Pagination, Navigation } from 'swiper';


const TestimonialSlider = () => {
  return (
    <Swiper 
    navigation={true}
    pagination={{ clickable:true }}
    modules={[ Pagination, Navigation]}
    className=' h-[400px] '
  >
    {
      testimonialData.map((person, index) => {
        // console.log(item.title)
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <di className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} height={100} width={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <di className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</di>
                </di>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>
  )
};

export default TestimonialSlider;