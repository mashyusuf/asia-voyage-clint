import { useEffect, useState } from "react";
import AllTouristSpotsCard from "./AllTouristSpotsCard";


const Spots = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      // Fetch data from backend when component mounts
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/addtourist'); // Replace with your actual backend endpoint
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
        <section className="grid grid-cols-3 gap-10">
               
                {
                    data && data.map(data => <AllTouristSpotsCard data={data} key={data._id}></AllTouristSpotsCard>)
                }

        </section>
    );
};

export default Spots;