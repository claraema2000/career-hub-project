import { GrLocation } from 'react-icons/gr';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div className="bg-base-100 rounded-md shadow-md p-5 space-y-3">
            <img src={logo} alt="Company logo" />
            <h3 className="text-4xl font-bold">{job_title}</h3>
            <h6 className="text-gray-500 text-xl font-medium">{company_name}</h6>
            <div className="flex  gap-5">
                <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-primary">{job_type}</button>
            </div>
            <div className="flex gap-5">
                <h6 className="text-gray-500 text-xl flex gap-1 items-center"><GrLocation></GrLocation> {location}</h6>
                <h6 className="text-gray-500 text-xl flex gap-1 items-center"> <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar> Salary: {salary}</h6>
            </div>
            <Link to={`/job/${id}`}>
                <button className="btn text-white font-bold bg-gradient-to-r from-cyan-300 from-5% to-indigo-400 to-40%">View Details</button>
            </Link>

        </div>
    );
};

export default Job;