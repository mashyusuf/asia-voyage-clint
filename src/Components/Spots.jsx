import { useEffect, useState } from "react";
import AllTouristSpotsCard from "./AllTouristSpotsCard";
import {  Slide,  } from 'react-awesome-reveal';


const Spots = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      // Fetch data from backend when component mounts
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://asia-voyage-server-kohl.vercel.app/addtourist'); // Replace with your actual backend endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
   console.log(data)
   
    return (
        <section className="grid md:grid-cols-2 lg:grid-col-3 gap-10">
               <div className="col-span-3 mb-6">
                <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Discover Amazing Tourist Spots</h1>
                <p className="text-lg text-gray-700 text-center">Explore the beauty of various tourist spots around the world.</p>
            </div>
          <Slide>

                {
                    data && data.map(data => <AllTouristSpotsCard data={data} key={data._id}></AllTouristSpotsCard>)
                }
          </Slide>

        </section>
    );
};

export default Spots;