import BannerImage from "../../assets/images/user.png"
const Banner = () => {
    return (
        <div className="hero container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BannerImage}
                    className="w-1/2 rounded-lg" />
                <div className=" ml-20">
                    <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;