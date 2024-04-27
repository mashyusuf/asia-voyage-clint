import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from 'prop-types';
const AllTouristSpotsCard = ({ data }) => {
    console.log(data)
    const { spot, cost, seasonality, location, total_visitors_per_year: totalVisitorsPerYear, photo, travelTime } = data;
    console.log(totalVisitorsPerYear)
    return (
        <div className=" flex items-center justify-center ">
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={photo} className="w-[400px] h-[200px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{spot}!</h2>
                        <p className="flex items-center"> <FiArrowUpRight className="text-2xl" />Cost : <span className="text-sm text-teal-700"> {cost}</span> </p>
                        <p className="flex items-center"> <FiArrowUpRight className="text-2xl" />Seasonality : <span className="text-sm text-teal-700">{seasonality}</span> </p>
                        <p className="flex items-center"> <FiArrowUpRight className="text-2xl" />Travel Time : <span className="text-sm text-teal-700">{travelTime}</span> </p>

                        <p className="flex items-center"> <FiArrowUpRight className="text-2xl" />Location :<span className="text-sm text-teal-700">{location}</span> </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-info w-full">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
AllTouristSpotsCard.propTypes = {
    data: PropTypes.shape({
        spot: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        travelTime: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        seasonality: PropTypes.string.isRequired,
        travel_time: PropTypes.string.isRequired,
        total_visitors_per_year: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
    }).isRequired,
};

export default AllTouristSpotsCard;