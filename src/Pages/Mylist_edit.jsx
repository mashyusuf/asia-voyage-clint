import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Mylist_edit = () => {
    const navigate = useNavigate()
    const loadedData = useLoaderData();
    const { tourists_spot_name, location, average_cost, _id } = loadedData[0];
    const [country, setCountry] = useState(null);

    console.log(loadedData)
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

    const handleAddSpot = event => {
        event.preventDefault();
        const form = event.target;
        const country_name = form.country_name.value;
        const tourists_spot_name = form.spot.value;
        const location = form.location.value;
        const average_cost = form.cost.value;

        // Include _id in the alldata object
        const alldata = { _id, tourists_spot_name, country_name, location, average_cost };

        console.log(alldata);
        fetch(`http://localhost:5000/update-mylist/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alldata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Spot updated successfully!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    navigate('/mylist')
                }
            })
            .catch(error => {

                console.error('Error updating spot:', error);
            });
    }

    return (
        <div>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">

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
                                <input type="text" name="spot" id="spot" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue={tourists_spot_name} />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                <input type="text" name="location" id="location" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue={location} />
                            </div>
                            <div>
                                <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Average Cost</label>
                                <input type="text" name="cost" id="cost" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue={average_cost} />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Update Spot
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Mylist_edit;
