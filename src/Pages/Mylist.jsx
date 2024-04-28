import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import { Link, } from "react-router-dom";

const Mylist = () => {

   










    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);
    const user_email = user.email;

  
    useEffect(() => {
        fetchData();
    }, [user_email]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/my-tourist-spots/${user_email}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // Filter out the deleted item from the data array
                            setData(prevData => prevData.filter(item => item._id !== _id));
                        }
                    });
            }
        })
    };
        const handleEdit = ()=>{

        }
        console.log(data)
        
    return (
        <div className="h-[600px] mt-8">
            {loading && (
                <p className="text-center">
                    <span className="loading loading-bars loading-lg"></span>
                </p>
            )}
            {data && (
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-500 w-full">
                        <thead>
                            <tr className="bg-gray-700 text-white">
                                <th className="border border-gray-500 px-4 py-2">Spot Name</th>
                                <th className="border border-gray-500 px-4 py-2">Country Name</th>
                                <th className="border border-gray-500 px-4 py-2">Location</th>
                                <th className="border border-gray-500 px-4 py-2">Average Cost</th>
                                <th className="border border-gray-500 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {data.map((mylist, index) => (
                                <tr className="border border-gray-500" key={index}>
                                    <td className="border border-gray-500 px-4 py-2">{mylist.tourists_spot_name}</td>
                                    <td className="border border-gray-500 px-4 py-2">{mylist.country_name}</td>
                                    <td className="border border-gray-500 px-4 py-2">{mylist.location}</td>
                                    <td className="border border-gray-500 px-4 py-2">{mylist.average_cost}</td>
                                    <td className="border border-gray-500 px-4 py-2 flex justify-center gap-2">
                                        <Link to={`/edit-mylist/${mylist._id}`}>

                                        <button className="text-blue-600 hover:text-blue-800 bg-transparent hover:bg-blue-200 rounded-md px-3 py-1 transition duration-300" onClick={() => handleEdit(mylist)}>Edit</button>
                                        </Link>
                                        <button className="text-red-600 hover:text-red-800 bg-transparent hover:bg-red-200 rounded-md px-3 py-1 transition duration-300" onClick={() => handleDelete(mylist._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Mylist;
