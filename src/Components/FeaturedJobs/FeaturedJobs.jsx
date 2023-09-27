import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // This is not teh best way to load show all data 
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div className="text-center mt-14">
                <h2 className="text-5xl font-semibold">Featured Jobs</h2>
                <p className="text-gray-600">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-7">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center my-12">
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)} className='btn text-white font-bold bg-gradient-to-r from-cyan-300 from-5% to-indigo-500 to-50%'>Show All Jobs</button>
                </div>
            </div>

        </div>

    );
};

export default FeaturedJobs;