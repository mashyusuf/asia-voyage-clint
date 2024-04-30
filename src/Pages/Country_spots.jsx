import { useEffect, useState } from "react";
import { FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import useTitle from "../Components/useTitle";

const Country_spots = () => {
    useTitle('Country spots');
    const { country_name } = useParams();
    const [spots, setSpots] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/countries-spots/${country_name}`);
                const data = await response.json();
                setSpots(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [country_name]);
    console.log(spots)
    return (
        <div className="flex justify-center items-center h-full">
            <div className="max-w-6xl w-full p-4 bg-white rounded-md shadow-lg overflow-y-auto" style={{ maxHeight: "80vh" }}>
                <h1 className="text-3xl font-bold mb-4 text-center">Tourist Spots in {country_name}</h1>
                <div className="grid grid-cols-3 gap-6">
                    {spots.length === 0 ? (
                        <p className="text-center text-gray-600">No tourist spots found for {country_name}.</p>
                    ) : (
                        spots.map((spot, index) => (
                            <div key={index}>
                                <div className="rounded-lg overflow-hidden shadow-xl bg-gray-50">
                                    <img src={spot.image} className="w-full h-64 object-cover rounded-t-lg" alt="" />
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{spot.tourists_spot_name}</h2>
                                        <div className="flex items-center mb-2 text-gray-600">
                                            <FiCalendar className="text-xl mr-2" />
                                            <p className="text-sm">Seasonality: <span className="font-semibold">{spot.seasonality}</span></p>
                                        </div>
                                        <div className="flex items-center mb-2 text-gray-600">
                                            <FiClock className="text-xl mr-2" />
                                            <p className="text-sm">Travel Time: <span className="font-semibold">{spot.travel_time}</span></p>
                                        </div>
                                        <div className="flex items-center mb-2 text-gray-600">
                                            <FiUsers className="text-xl mr-2" />
                                            <p className="text-sm">Visitors: <span className="font-semibold">{spot.total_visitors_per_year}</span></p>
                                        </div>
                                        <div className="flex items-center mb-2 text-gray-600">
                                            <FiMapPin className="text-xl mr-2" />
                                            <p className="text-sm">Location: <span className="font-semibold">{spot.location}</span></p>
                                        </div>
                                        <div className="flex justify-end">
                                            <Link to={`/viewDetails/${spot._id}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Country_spots;
