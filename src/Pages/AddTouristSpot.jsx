import { useState } from "react";
import Swal from 'sweetalert2'

const AddTouristSpot = () => {
    const [formData, setFormData] = useState({
        seasonality: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleAddSpot = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const spot = form.spot.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const user = form.user.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const alldata = { name, spot, location, description, cost, seasonality, travel_time, total_visitors_per_year, user, email, photo }
        console.log(alldata)
        fetch('http://localhost:5000/addtourist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alldata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data,'data recived')
                if(data.insertedId ){
                    Swal.fire({
                        title: " spots added successfully!",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                }
            })
            
    }

    return (
        <div>
            <div className="bg-rose-400 p-12">
                <h1 className="text-2xl text-center mb-5">Add Here!</h1>

                <form onSubmit={handleAddSpot} className="max-w-6xl mx-auto">
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Country Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Tourists Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="spot" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="cost" placeholder="Cost" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>

                            <select name="seasonality" className="select select-bordered w-full" onChange={handleChange} value={formData.seasonality} required>
                                <option value="">Select Seasonality</option>
                                <option value="Summer">Summer</option>
                                <option value="Winter">Winter</option>
                                {/* Add more options for other seasons if needed */}
                            </select>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>

                            <select name="travel_time" className="select select-bordered w-full" onChange={handleChange} value={formData.travel_time} required>
                                <option value="">Select Travel Time</option>
                                <option value="5 day">5 day</option>
                                <option value="7 days">7 days</option>
                                <option value="10 days">10 days</option>
                                {/* Add more options for other durations if needed */}
                            </select>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>

                            <select name="total_visitors_per_year" className="select select-bordered w-full" onChange={handleChange} value={formData.total_visitors_per_year} required>
                                <option value="">Select Total Visitors Per Year</option>
                                <option value="1000">1,000</option>
                                <option value="5000">5,000</option>
                                <option value="10000">10,000</option>
                                {/* Add more options for other visitor counts if needed */}
                            </select>

                        </div>

                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="user" placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="Email" required className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add Spot" className="btn btn-outline w-full mt-3 mb-11" />
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;