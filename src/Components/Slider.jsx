
import { Carousel } from 'react-responsive-carousel'; import image1 from '../assets/images/image1 - Copy.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import image2 from '../assets/images/image2.webp';
import image3 from '../assets/images/image3.avif';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image-5.jpg';
import image8 from '../assets/images/image8.jpg';
import image7 from '../assets/images/image7.jpg';
import image6 from '../assets/images/image6.jpg';

const Slider = () => {
    return (
        <section className=''>

<div className='absolute mx-auto max-w-[1440px] '>
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
          <div>
            <img className='w-[1100px] h-[550px] object-cover' src={image7} alt="Image 1" />
          </div>
          <div>
            <img className='w-[1100px] h-[550px] object-cover' src={image1} alt="Image 2" />
          </div>
          <div>
            <img className='w-[1100px] h-[550px] object-cover' src={image3} alt="Image 3" />
          </div>
          <div>
            <img className='w-[1100px] h-[550px] object-cover' src={image4} alt="Image 4" />
          </div>
          <div>
            <img className='w-[1100px] h-[550px] object-cover' src={image5} alt="Image 5" />
          </div>
          <div>
            <img className='w-[1100px] h-[550px] object-cover' src={image8} alt="Image 5" />
          </div>
          <div>
            <img className='w-[1100px] h-[550px] object-cover' src={image2} alt="Image 5" />
          </div>
          <div>
            <img className='w-[1100px] h-[550px] object-cover' src={image6} alt="Image 5" />
          </div>
        </Carousel>
      </div>
      <div className='relative flex justify-center gap-2 pt-28'>
        <h1 className=' text-5xl font-bold text-[#FFC100]'>Lets</h1>
        <h1 className='text-5xl font-bold text-[#FFC100]'>Plan Your</h1>
        <h1 className='text-5xl font-bold text-[#FFC100]'>Next</h1>
        <h1 className='text-5xl font-bold text-[#FFC100]'>Adventure!.</h1>
      </div>
      <div className="form-control relative items-center pt-20">
        <input type="text" placeholder="Search" className="input input-bordered w-[500px]" />
      </div>
      <div>
        <h1 className='text-5xl text-orange-700 font-bold text-center mt-80 mb-20'>Explore The Best Spots!</h1>
        </div>

        </section>
    );
};

export default Slider;