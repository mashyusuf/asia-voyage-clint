import React, { useState,  } from 'react';
import { useLoaderData } from "react-router-dom";
import AllTouristSpotsCard from "../Components/AllTouristSpotsCard";
import useTitle from "../Components/useTitle";

const AllTouristSpot = () => {
    useTitle('AllTouristSpot');

    const loadedData = useLoaderData();
    const [isLoading, setIsLoading] = useState(false); // Initialized isLoading state to true

    // useEffect to update isLoading state when data is loaded
  

    return (
        <div>
            {isLoading ? (
                <p className="text-center">
                    <span className="loading loading-bars loading-lg"></span>
                </p>
            ) : (
                <div className="grid grid-cols-3 gap-20 mb-8 mt-8">
                    {loadedData.map(data => <AllTouristSpotsCard data={data} key={data._id}></AllTouristSpotsCard>)}
                </div>
            )}
        </div>
    );
};

export default AllTouristSpot;
