import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import { GrLocation } from 'react-icons/gr';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }

    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobs, storedJobIds, jobsApplied)
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [])
    return (
        <div className="my-16 mx-8">
            <div className="text-right my-8">
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1 bg-indigo-200">Filter</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-indigo-50 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>

            <div className=" space-y-10">
                {
                    displayJobs.map(job => <div key={job.id} className=" grid grid-cols-1 md:grid-cols-4 text-center items-center p-4 shadow-md rounded-md justify-space between">
                        <div className=" ">
                            <img src={job.logo} alt="" />
                        </div>
                        <div className="p-6 space-y-2 col-span-2 text-left">
                            <h3 className="text-2xl font-bold">{job.job_title} : {job.remote_or_onsite}</h3>
                            <h6 className="text-gray-500 text-xl font-medium">{job.company_name}</h6>
                            <div className="flex  gap-5">
                                <button className="btn btn-outline btn-primary">{job.remote_or_onsite}</button>
                                <button className="btn btn-outline btn-primary">{job.job_type}</button>
                            </div>
                            <div className="flex gap-5">
                                <h6 className="text-gray-500 text-xl flex gap-1 items-center"><GrLocation></GrLocation> {job.location}</h6>
                                <h6 className="text-gray-500 text-xl flex gap-1 items-center"> <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar> Salary: {job.salary}</h6>
                            </div>
                        </div>
                        <Link to={`/job/${job.id}`} className="">
                            <button className="btn text-white font-bold bg-gradient-to-r from-cyan-300 from-5% to-indigo-400 to-40%">View Details</button>
                        </Link>



                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;