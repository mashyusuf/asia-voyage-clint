import { Link } from "react-router-dom";

const TopDestination = () => {
    return (
        <div className="mt-20 mb-20">
            <div className="flex flex-col m-10 lg:justify-between items-center">

                <div className="w-[60%]">
                    <h1 className="text-2xl mb-10 text-orange-600">_______  POPULAR DESTINATION</h1>
                    <h1 className="text-5xl mb-20 font-bold">TOP NOTCH DESTINATION</h1>
                </div>
                <div className="">


                    Embark on a journey of discovery through the wonders of the world. <br /> From bustling city streets to tranquil natural landscapes, <br /> every destination holds a story waiting to be explored. Let the adventures <br /> unfold and the memories weave together, creating a tapestry <br /> of experiences that define our travels.
                </div>
            </div>

            <section className="flex justify-around ">

                <div className="w-[800px] gap-10 flex">
                    <div className="carousel rounded-box  relative">
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/S7V57Wh/download.jpg" alt="Burger" className=" h-[600px] " />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                                <h2 className="text-3xl font-bold mb-2">Thailand</h2>
                                <p className="text-lg">Explore the bustling streets of Bangkok, relax on the stunning beaches of Phuket, and visit ancient temples like Wat Arun</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel rounded-box relative">
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/C55y4nJ/1493444826-5.jpg" alt="Burger" className=" h-[600px]" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                                <h2 className="text-3xl font-bold mb-2">Singapore</h2>
                                <p className="text-lg">Discover the iconic Marina Bay Sands</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[30%]">
                    <div className="carousel rounded-box  relative">
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/jTp515q/Sajek-Valley-Bangladesh.webp" alt="Burger" className="w-full  h-[300px]" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                                <h2 className="text-3xl font-bold mb-2">Bangladesh</h2>
                                <p className="text-lg">Experience the natural beauty of Sajek Valley</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel rounded-box  relative">
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/p3W3kmS/Bhutan.jpg" alt="Burger" className="w-[500px] h-[300px]" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                                <h2 className="text-3xl font-bold mb-2">India</h2>
                                <p className="text-lg">embark on a spiritual journey on Bhutan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-center mt-10">
                <Link to={'/alltourist'}><button className="border  p-4 bg-orange-600 text-white font-bold">MORE DESTINATION</button></Link>
            </div>
        </div>
    );
};

export default TopDestination;
