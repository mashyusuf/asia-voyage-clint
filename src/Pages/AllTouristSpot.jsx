import { useLoaderData } from "react-router-dom";
import AllTouristSpotsCard from "../Components/AllTouristSpotsCard";


const AllTouristSpot = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    return (
        <div>
                <h1>all tourist spots{loadedData.length}</h1> 
        <div className="grid grid-cols-2 gap-8 ">

                {
                    loadedData.map(data => <AllTouristSpotsCard data={data} key={data._id}></AllTouristSpotsCard>)
                }           
        </div>
        </div>
    );
};

export default AllTouristSpot;