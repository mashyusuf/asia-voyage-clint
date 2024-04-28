import { FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const AllTouristSpotsCard = ({ data }) => {
    console.log(data)
    const { tourists_spot_name, location, seasonality, travel_time, total_visitors_per_year, image, _id } = data;
    return (
        <div className="flex items-center justify-center font-bold">
  <div>
    <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white w-96 transition duration-300 transform hover:shadow-2xl hover:scale-105">
      <figure>
        <img src={image} className="w-full h-64 object-cover" alt="" />
      </figure>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{tourists_spot_name}</h2>
        <div className="flex items-center mb-2">
          <FiCalendar className="text-xl mr-2" />
          <p className="text-sm">Seasonality: <span className="font-semibold">{seasonality}</span></p>
        </div>
        <div className="flex items-center mb-2">
          <FiClock className="text-xl mr-2" />
          <p className="text-sm">Travel Time: <span className="font-semibold">{travel_time}</span></p>
        </div>
        <div className="flex items-center mb-2">
          <FiUsers className="text-xl mr-2" />
          <p className="text-sm">Visitors: <span className="font-semibold">{total_visitors_per_year}</span></p>
        </div>
        <div className="flex items-center mb-2">
          <FiMapPin className="text-xl mr-2" />
          <p className="text-sm">Location: <span className="font-semibold">{location}</span></p>
        </div>
        <div className="flex justify-end mt-4">
          <Link to={`/viewDetails/${_id}`} className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition duration-300">View Details</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    

    );
};
AllTouristSpotsCard.propTypes = {
    data: PropTypes.shape({
        tourists_spot_name: PropTypes.string.isRequired,
        average_cost: PropTypes.string.isRequired,
        travelTime: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        totalVisitorsPerYear: PropTypes.string.isRequired,
        seasonality: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        travel_time: PropTypes.string.isRequired,
        total_visitors_per_year: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default AllTouristSpotsCard;