import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeaturedJob = () => {
    const [featuresJob, setFeatureJob] = useState([])
    useEffect(() => {
        fetch('./jobs.json')
            .then(res => res.json())
            .then(data => setFeatureJob(data))
    }, [])

    return (
        <div className="container mx-auto my-10 px-5">
            <div className="text-center">
                <h3 className="text-4xl font-bold mb-5">Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="my-5 grid md:grid-cols-2 gap-5">
                {
                    featuresJob.map(featureJob=> <FeatureJob 
                        featureJob ={featureJob}
                        key={featureJob.id} 
                    ></FeatureJob>)
                }
            </div>

        </div>
    );
};

export default FeaturedJob;