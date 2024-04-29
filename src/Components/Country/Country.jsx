import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Country = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/all-countries'); // Replace with your actual backend endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(data)
 
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Explore Countries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data.map((country) => (
            <div key={country._id} className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
              <img className="w-full h-48 object-cover" src={country.photoURL} alt={country.name} />
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-2 text-center">{country.name}</h1>
                <p className="italic text-center">{country.description}</p>
              </div>
              <div>
                <Link to={`/country/${country.name}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-full">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Country;
