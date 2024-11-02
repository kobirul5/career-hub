import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const Home = () => {
    return (
        <div>
            <div className="bg-[#9873ff11]">
                <Banner></Banner>
            </div>
                <Category></Category>
                <FeaturedJob></FeaturedJob>
        </div>
        );
};

export default Home;