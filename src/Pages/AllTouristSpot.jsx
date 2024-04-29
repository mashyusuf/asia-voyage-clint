import { useLoaderData } from "react-router-dom";
import AllTouristSpotsCard from "../Components/AllTouristSpotsCard";


const AllTouristSpot = () => {


    const loadedData = useLoaderData()

    console.log(loadedData)
    return (
        <div>

            <div className="grid grid-cols-3 gap-20  mb-8  mt-8">

                {
                    loadedData.map(data => <AllTouristSpotsCard data={data} key={data._id}></AllTouristSpotsCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;