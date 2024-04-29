import { useEffect, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

function ViewCardsDetails() {
   
    const [data, setData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/all-tourist-spots/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } 
        };

        fetchData();
    }, []); // Ensure that this effect runs only once, or add params.id to the dependency array if needed

    return (
        <div className='my-20'>

           
            {/* Render your component content using the fetched data */}
            {
                data && data.map(d => (
                    <div key={d._id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center hover:scale-105 transition">
                        {/* Image Layer */}
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img src={d.image} className="w-full h-96 object-cover transition-transform transform hover:scale-105" alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                               
                            </div>
                        </div>
                        {/* Details Layer */}
                        <div className="p-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">{d.tourists_spot_name}</h2>
                            <div className="font-bold italic">
                                <p className="flex items-center mb-2"> <FaCircle className="mr-2" />Cost: <span className="text-sm">{d.average_cost}</span> </p>
                                <p className="flex items-center mb-2"> <FaCircle className="mr-2" />Seasonality: <span className="text-sm">{d.seasonality}</span> </p>
                                <p className="flex items-center mb-2"> <FaCircle className="mr-2" />Travel Time: <span className="text-sm">{d.travel_time}</span> </p>
                                <p className="flex items-center mb-2"> <FaCircle className="mr-2" />Visitors: <span className="text-sm">{d.total_visitors_per_year}</span> </p>
                                <p className="flex items-center mb-2"> <FaCircle className="mr-2" />Location: <span className="text-sm">{d.location}</span> </p>
                                <p className="flex items-center mb-2"> <FaCircle className="mr-2" />Description: <span className="text-sm">{d.short_description}</span> </p>
                            </div>
                            <div className="flex justify-center mt-8">
                                <Link to={'/'} className='btn mr-4 mb-4 bg-secondary text-white py-2 px-6 rounded-lg hover:bg-blue-800 hover:shadow-xl transition duration-300'>Home</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ViewCardsDetails;
