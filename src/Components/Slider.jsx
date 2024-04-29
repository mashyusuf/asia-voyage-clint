
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import image1 from '../assets/images/image1 - Copy.jpg';
import image2 from '../assets/images/image2.webp';
import image3 from '../assets/images/image3.avif';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image-5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.jpg';

const Slider = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  const titles = [
    "Discover Natural Wonders",
    "Experience Rich Cultures",
    "Embark on Adventures",
    "Uncover Hidden Gems",
    "Explore Scenic Landscapes",
    "Encounter Wildlife",
    "Enjoy Tranquil Retreats",
    "Marvel at Architectural Marvels"
  ];

  const descriptions = [
    "Explore the breathtaking beauty of untouched landscapes.",
    "Immerse yourself in diverse traditions and vibrant communities.",
    "Embark on thrilling journeys filled with excitement and discovery.",
    "Find hidden treasures and unique attractions off the beaten path.",
    "Witness awe-inspiring views and majestic natural wonders.",
    "Encounter fascinating creatures in their natural habitats.",
    "Relax and rejuvenate in serene and picturesque locations.",
    "Admire the ingenuity and beauty of human creations."
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <section className='h-[600px]'>
      <div className=" mx-auto max-w-[1440px]">
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayInterval={3000}
          responsive={responsive}
          infinite
          disableButtonsControls
          dotsDisabled
        >
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                className="w-[1100px] h-[550px] object-cover"
                src={image}
                alt={`Image ${index + 1}`}
              />
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 text-white text-center">
                <h1 className="text-3xl font-bold">{titles[index]}</h1>
                <p className="text-lg">{descriptions[index]}</p>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </section>
  );
};

export default Slider;
