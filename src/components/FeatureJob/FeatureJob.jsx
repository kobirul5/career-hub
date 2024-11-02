import { Link } from "react-router-dom";

const FeatureJob = ({ featureJob }) => {
    const {id,logo, job_title, company_name,remote_or_onsite,location, job_type, salary} = featureJob

    return (
        <div className="card border ">
            <div className="card-body">
                <div>
                    <img src={logo} alt="" />
                </div>
                <h2 className="card-title">{job_title}</h2>
                <p className="text-gray-500">{company_name}</p>
                <div>
                    <button className="btn border border-[#9873FF] hover:border-[#9873FF] mr-5 bg-clip-text text-transparent bg-gradient-to-l from-[#9873FF] to-[#8c64f8]">{remote_or_onsite}</button>
                    <button className="btn  border border-[#9873FF] bg-clip-text text-transparent bg-gradient-to-l from-[#9873FF] to-[#7a4ff1]">{job_type}</button>
                </div>
                <div className=" flex text-gray-500">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/jobDetails/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureJob;