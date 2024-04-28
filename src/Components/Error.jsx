import { Link } from 'react-router-dom';
import errorVideo from '../assets/images/404.mp4'; // Path to your error video file


function Error() {
    return (
        <div className="error-container ">
            <div className='text-center'>

            <Link to={'/'}>
                <button className='btn font-bold btn-active btn-primary ml-[9px] mt-5 mb-5'> Back To Home</button>

            </Link>
            </div>
            <div className='flex justify-center'>
                
            <video autoPlay loop muted className="error-video h-[600px] ">
                <source src={errorVideo} type="video/mp4" />

            </video>
            </div>

        </div>
    );
}

export default Error;
