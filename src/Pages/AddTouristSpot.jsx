import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../Authprovider/Authprovider";
import { useNavigate } from "react-router-dom";

const AddTouristSpot = () => {
    const navigate = useNavigate()
    const [country, setCountry] = useState(null);
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        seasonality: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/all-countries');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setCountry(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddSpot = event => {
        event.preventDefault();
        const form = event.target;
        const country_name = form.country_name.value;
        const tourists_spot_name = form.spot.value;
        const location = form.location.value;
        const short_description = form.description.value;
        const average_cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const user_name = form.user.value;
        const user_email = form.email.value;
        const image = form.photo.value;
        const alldata = { tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_name, user_email, image }

        fetch('http://localhost:5000/addtourist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alldata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Spot added successfully!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    form.reset();
                    navigate('/alltourist')
                }
            });
    }

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl text-center mb-8 font-bold">Add Tourist Spot</h1>
                <form onSubmit={handleAddSpot} className="max-w-xl mx-auto">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="country_name" className="block text-sm font-medium text-gray-700">Country Name</label>
                            <select name="country_name" id="country_name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                {country && country.map(country => <option key={country._id} value={country.name}>{country.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="spot" className="block text-sm font-medium text-gray-700">Tourists Spot Name</label>
                            <input type="text" name="spot" id="spot" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                            <input type="text" name="location" id="location" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <input type="text" name="description" id="description" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Average Cost</label>
                            <input type="text" name="cost" id="cost" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="seasonality" className="block text-sm font-medium text-gray-700">Seasonality</label>
                            <select name="seasonality" id="seasonality" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} value={formData.seasonality} required>
                                <option value="">Select Seasonality</option>
                                <option value="Summer">Summer</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="travel_time" className="block text-sm font-medium text-gray-700">Travel Time</label>
                            <select name="travel_time" id="travel_time" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} value={formData.travel_time} required>
                                <option value="">Select Travel Time</option>
                                <option value="5 day">5 day</option>
                                <option value="7 days">7 days</option>
                                <option value="10 days">10 days</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="total_visitors_per_year" className="block text-sm font-medium text-gray-700">Total Visitors Per Year</label>
                            <select name="total_visitors_per_year" id="total_visitors_per_year" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} value={formData.total_visitors_per_year} required>
                                <option value="">Select Total Visitors Per Year</option>
                                <option value="1000">1,00000</option>
                                <option value="5000">5,00000</option>
                                <option value="10000">1,00000</option>
                            </select>
                        </div>
                        <input type="hidden" name="user" value={user?.displayName} />
                        <input type="hidden" name="email" value={user?.email} />
                        <div>
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo URL</label>
                            <input type="text" name="photo" id="photo" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Add Spot
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;
