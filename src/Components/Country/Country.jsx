import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from 'react-awesome-reveal';

const Country = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://asia-voyage-server-kohl.vercel.app/all-countries'); // Replace with your actual backend endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Explore Countries</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((country) => (
          <Slide key={country._id}>
            <div className="max-w-sm mx-auto md:max-w-md lg:max-w-lg bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
              <img className="w-full h-48 object-cover" src={country.photoURL} alt={country.name} />
              <div className="p-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">{country.name}</h1>
                <p className="text-sm md:text-base lg:text-lg italic text-center">{country.description}</p>
              </div>
              <div className="flex justify-center">
                <Link to={`/country/${country.name}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-2/3 lg:w-1/2">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Country;

