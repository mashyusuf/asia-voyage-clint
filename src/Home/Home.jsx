
import Country from "../Components/Country/Country";
import Slider from "../Components/Slider";
import Spots from "../Components/Spots";
import WhyUs from "../Components/WhyUs";
import useTitle from "../Components/useTitle";



const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Slider></Slider>
            <Spots></Spots>
            <Country></Country>

            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;